"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const crypto_1 = __importDefault(require("crypto"));
const express_validator_1 = require("express-validator");
const models_1 = require("../models/");
const config_1 = require("../config/config");
const bson_1 = require("bson");
const nodemailer_1 = require("../utils/nodemailer");
let User = mongoose.model('User', models_1.userSchema);
let Token = mongoose.model('Token', models_1.tokenSchema);
class AuthController {
    constructor() {
        this.login = (req, res) => {
            this.findUser(req).then(document => {
                if (!document) {
                    res.status(200).json({ success: false, message: config_1.USER_NOT_FOUND });
                    return;
                }
                let user = new User();
                let isCompared = user.schema.methods.comparePassword(req.body.password, document);
                if (isCompared)
                    this.sendProfileResponse(document, res, user);
                else
                    res.status(200).json({ success: false, message: config_1.INVALID_PASSWORD });
            }).catch(error => {
                console.error("Error", error);
                res.status(200).json(error);
            });
        };
        this.twitterProfile = (req, res) => {
            if (req.user)
                this.sendProfileResponse(req.user, res, new User());
            else
                res.json({ success: false, user: null });
        };
        this.forgotPassword = (req, res) => {
            this.findUser(req).then(document => {
                if (!document) {
                    res.status(200).json({ success: false, message: config_1.USER_NOT_FOUND });
                    return;
                }
                /* Finding Already Saved Token against this user and Deleting them From DB
                  and then Saving the verification token
                */
                Token.find({ _userId: new bson_1.ObjectId(document._id) }, (err, resetPassword) => {
                    const token = new Token({ _userId: document._id, token: crypto_1.default.randomBytes(16).toString('hex') });
                    Token.create(token).then((response) => {
                        let payload = {
                            to: document.email,
                            subject: 'Password Reset',
                            content: '<h4><b>Only VIPs:</b></h4>' +
                                '<p>To reset your password, Go to the following url and follow the instructions.:</p>' +
                                '<a href=' + config_1.CLIENT_URL + '/reset-password/' + response.get('token') + '>Click Here</a>' +
                                '<br><br>' +
                                '<p>--Only VIPs Team --</p>'
                        };
                        nodemailer_1.NodeMailer.sendMail(payload).then(result => {
                            return res.json({ success: true, message: config_1.PASSWORD_RESET_MAIL_SENT });
                        }).catch(error => {
                            return res.json({ success: true, message: config_1.PASSWORD_RESET_MAIL_SENT_ERROR });
                        });
                    }).catch(error => {
                        //console.error("Password Reset Creation Error", error);
                        res.status(200).json({ success: false, message: config_1.ERROR_MSG });
                    });
                }).remove().exec();
            }).catch(error => {
                console.error("Error", error);
                res.status(200).json(error);
            });
        };
        this.resetPassword = (req, res) => {
            Token.findOne({ token: req.body.token }, (err, result) => {
                if (!result) {
                    this.sendError(res);
                    return;
                }
                let bcryptResult = (result.token === req.body.token) ? true : false;
                if (!bcryptResult) {
                    this.sendError(res);
                    return;
                }
                if (result.expire < new Date().getTime()) {
                    this.sendError(res, config_1.TOKEN_EXPIRED_ERROR);
                    return;
                }
                const hash = new User().schema.methods.createHash(req.body.password);
                User.updateOne({ _id: new bson_1.ObjectId(result.userId) }, { $set: { password: hash } }, (err, response) => {
                    Token.deleteOne({ userId: result.userId, token: req.body.token }).then(result => {
                        if (!result) {
                            this.sendError(res);
                            return;
                        }
                        ;
                        res.status(200).json({ success: true, message: 'Password updated.' });
                    }).catch(error => this.sendError(res, error.message ? error.message : config_1.ERROR_MSG));
                }).catch(error => this.sendError(res, error.message ? error.message : config_1.ERROR_MSG));
            });
        };
        this.verifyEmail = (req, res) => {
            req.params.token = req.params.token.replace(/['"]+/g, '');
            console.log('Verify Email', req.params.token);
            // Find a matching token
            Token.findOne({ token: req.params.token }, (err, token) => {
                console.log('Result', token);
                if (token.token != req.params.token)
                    return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });
                // If we found a token, find a matching user
                User.findOne({ _id: token._userId }, (err, user) => {
                    if (user._id.toString() != token._userId.toString())
                        return res.status(400).send({ success: false, msg: 'We were unable to find a user for this token.' });
                    if (user.isVerified)
                        return res.status(400).send({ type: 'already-verified', msg: 'This user has already been verified.' });
                    // Verify and save the user
                    user.isVerified = true;
                    user.save((err) => {
                        if (err) {
                            return res.status(500).send({ msg: err.message });
                        }
                        res.redirect(config_1.CLIENT_URL + '/login?isVerified=true');
                    });
                });
            });
        };
        this.validate = (method) => {
            switch (method) {
                case 'register':
                    return [
                        express_validator_1.body('user_name', 'User name is required.').exists(),
                        express_validator_1.body('email', 'Email is required.').exists(),
                        express_validator_1.body('email', 'Email is invalid.').isEmail(),
                        express_validator_1.body('password', ' Password is required.').exists(),
                        express_validator_1.body('role', 'Role is required.').exists()
                    ];
                case 'login':
                    return [
                        express_validator_1.body('user_name', 'User name / Email is required.').exists(),
                        express_validator_1.body('password', 'Password is required.').exists()
                    ];
                case 'forgot-password':
                    return [
                        express_validator_1.body('user_name', 'Email is required.').exists(),
                        express_validator_1.body('user_name', 'Email is invalid.').isEmail(),
                    ];
                case 'reset-password':
                    return [
                        express_validator_1.body('userId', 'User id is required.').exists(),
                        express_validator_1.body('password', 'Password is required.').exists(),
                        express_validator_1.body('token', 'Token is required.').exists(),
                    ];
            }
        };
    }
    set twitterTokens(tokens) { this._tokens = tokens; }
    ;
    get twitterTokens() { return this._tokens; }
    register(req, res) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(200).json({ success: false, error: errors });
            return;
        }
        let user = new User(req.body);
        user.password = user.schema.methods.createHash(req.body.password);
        user.save((err, response) => {
            if (err) {
                if (err.errmsg && err.errmsg.indexOf('email') > -1)
                    err.errmsg = 'Email already exists';
                else if (err.errmsg && err.errmsg.indexOf('userName') > -1)
                    err.errmsg = 'Username already exists.';
                res.status(200).json({ success: false, message: err.errmsg || '' });
            }
            else {
                let token = new Token({ _userId: user._id, token: crypto_1.default.randomBytes(16).toString('hex') });
                // Save the verification token
                token.save((err, _token) => {
                    if (err) {
                        return res.status(500).send({ success: false, msg: err.message });
                    }
                    // Send the email
                    const url = 'http://' + req.headers.host + '/api/verifyEmail/' + _token.token;
                    const content = '<h4><b>Only VIPs:</b></h4>' +
                        '<p>To verify your email , Please click the below link:</p>' +
                        '<a href=' + url + '">Click Here</a>' +
                        '<br><br>' +
                        '<p>-- Team Only VIPs --</p>';
                    let payload = {
                        to: user.email,
                        subject: 'Account Verification',
                        content: content
                    };
                    nodemailer_1.NodeMailer.sendMail(payload).then(response => {
                        if (err) {
                            return res.status(200).send({ success: false, msg: 'Unable to send verification email.' });
                        }
                        res.status(200).send({ success: true, message: 'Account created successfully. Please verify your account. We have sent you an email to this account ' + user.email + ' .' });
                    }).catch(error => {
                        return res.status(200).send({ success: false, msg: 'Unable to send verification email.' });
                    });
                });
            }
        });
    }
    findUser(req) {
        return new Promise((resolve, reject) => {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                reject({ success: false, error: errors });
                return;
            }
            let value = req.body.user_name;
            let criteria = value.indexOf('@') > -1 ? { email: value } : { user_name: value };
            console.log(criteria);
            User.findOne(criteria, (err, document) => {
                if (err || document == null)
                    reject({ success: false, status: 200, message: config_1.USER_NOT_FOUND });
                else
                    resolve(document);
            });
        });
    }
    sendError(res, message) {
        res.status(200).json({ success: false, message: message || config_1.ERROR_MSG });
    }
    sendProfileResponse(document, res, user) {
        if (!document.isVerified && !document.twitterId)
            res.status(200).json({ success: false, message: 'Please verify your email address.' });
        else if (document.isSuspended)
            res.status(200).json({ success: false, message: 'We are sorry. your account has been suspended.' });
        else if (document.isDefaulted)
            res.status(200).json({ success: false, message: 'We are sorry. your account has been blocked.' });
        else {
            const jwt = user.schema.methods.generateJwt(document);
            res.status(200).json({ success: true, token: jwt });
        }
    }
}
exports.AuthController = AuthController;
