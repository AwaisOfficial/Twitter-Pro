"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const post_1 = require("./post");
const followees_1 = require("./follow/followees");
let User = mongoose.model('User', models_1.userSchema);
let Token = mongoose.model('Token', models_1.tokenSchema);
class AuthController {
    constructor() {
        this.login = (req, res) => {
            this.findUser(req).then(document => {
                if (!document) {
                    return res.status(200).json({ success: false, message: config_1.USER_NOT_FOUND });
                }
                let user = new User();
                let isCompared = user.schema.methods.comparePassword(req.body.password, document);
                if (isCompared) {
                    this.sendProfileResponse(document, res, user);
                    return;
                }
                else
                    return res.status(200).json({ success: false, message: config_1.INVALID_PASSWORD });
            }).catch(error => {
                console.error("Error", error);
                res.status(200).json(error);
                return this.sendError(res, config_1.ERROR_MSG);
            });
        };
        this.userProfile = (req, res) => {
            this.findUser(req).then(document => {
                if (!document)
                    return res.status(200).json({ success: false, message: config_1.USER_NOT_FOUND });
                else
                    return res.status(200).json({ success: true, response: document });
            }).catch(error => {
                console.log(error);
                return res.status(200).json({ success: false, message: config_1.USER_NOT_FOUND, error: error });
            });
        };
        this.twitterProfile = (req, res) => {
            if (req.user)
                this.sendProfileResponse(req.user, res, new User());
            else
                res.json({ success: false, user: null });
        };
        this.forgotPassword = (req, res) => {
            this.findUser(req).then((document) => {
                if (!document || !document.success) {
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
                return res.status(200).json(error);
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
            // Find a matching token
            Token.findOne({ token: req.params.token }, (err, token) => {
                if (token.token != req.params.token)
                    return res.status(400).send({ type: 'not-verified', message: 'We were unable to find a valid token. Your token my have expired.' });
                // If we found a token, find a matching user
                User.findOne({ _id: token._userId }, (err, user) => {
                    if (user._id.toString() != token._userId.toString())
                        return res.status(400).send({ success: false, message: 'We were unable to find a user for this token.' });
                    if (user.isVerified)
                        return res.status(400).send({ type: 'already-verified', message: 'This user has already been verified.' });
                    // Verify and save the user
                    user.isVerified = true;
                    user.save((err) => {
                        if (err) {
                            return res.status(500).send({ message: err.message });
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
                        express_validator_1.body('userName', 'User name is required.').exists(),
                        express_validator_1.body('email', 'Email is required.').exists(),
                        express_validator_1.body('email', 'Email is invalid.').isEmail(),
                        express_validator_1.body('password', ' Password is required.').exists(),
                        express_validator_1.body('role', 'Role is required.').exists()
                    ];
                case 'login':
                    return [
                        express_validator_1.body('userName', 'User name / Email is required.').exists(),
                        express_validator_1.body('password', 'Password is required.').exists()
                    ];
                case 'forgot-password':
                    return [
                        express_validator_1.body('userName', 'Email is required.').exists(),
                        express_validator_1.body('userName', 'Email is invalid.').isEmail(),
                    ];
                case 'reset-password':
                    return [
                        express_validator_1.body('userId', 'User id is required.').exists(),
                        express_validator_1.body('password', 'Password is required.').exists(),
                        express_validator_1.body('token', 'Token is required.').exists(),
                    ];
            }
        };
        this.memberProfileDetails = (req, res) => {
            this.getMemberProfileDetails(req).then((details) => {
                return res.status(200).json({ success: true, response: details });
            }).catch((error) => {
                return res.status(200).json({ success: false, message: config_1.ERROR_MSG, error: error });
            });
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
                        return res.status(500).send({ success: false, message: err.message });
                    }
                    // Send the email
                    const url = 'http://' + req.headers.host + '/api/verifyEmail/' + _token.token;
                    const content = '<h4><b>Only VIPs:</b></h4>' +
                        '<p>To verify your email , Please click the below link:</p>' +
                        '<a href=' + url + '>Click Here</a>' +
                        '<br><br>' +
                        '<p>-- Team Only VIPs --</p>';
                    let payload = {
                        to: user.email,
                        subject: 'Account Verification',
                        content: content
                    };
                    nodemailer_1.NodeMailer.sendMail(payload).then(response => {
                        if (!response) {
                            console.error('Mail Sending Error', err);
                            return res.status(200).send({ success: false, message: 'Unable to send verification email.' });
                        }
                        res.status(200).send({ success: true, message: 'Account created successfully. Please verify your account. We have sent you an email to this account ' + user.email + ' .' });
                    }).catch(error => {
                        return res.status(200).send({ success: false, message: 'Unable to send verification email.', error: err });
                    });
                });
            }
        });
    }
    findUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty())
                return { success: false, error: errors };
            const value = (req.method == 'POST') ? req.body.userName : req.query.userName;
            const criteria = value.indexOf('@') > -1 ? { email: value } : { userName: value };
            return yield User.findOne(criteria);
        });
    }
    sendError(res, message) {
        return res.status(200).json({ success: false, message: message || config_1.ERROR_MSG });
    }
    sendProfileResponse(document, res, user) {
        if (!document.isVerified && !document.twitterId)
            res.status(200).json({ success: false, message: 'Please verify your email address.' });
        else if (document.isCelebrity && !document.isProfileReviewed)
            res.status(200).json({ success: false, message: 'Profile is under review yet.' });
        else if (document.isCelebrity && document.reviewStatus == 'rejected')
            res.status(200).json({ success: false, message: document.reviewComments });
        else if (document.isSuspended)
            res.status(200).json({ success: false, message: 'We are sorry. your account has been suspended.' });
        else if (document.isDefaulted)
            res.status(200).json({ success: false, message: 'We are sorry. your account has been blocked.' });
        else {
            // if(document.isCelebrity){
            //   Post.aggregate([ 
            //     { $match : { 'user._id' : document._id.toString() } },
            //     { $count : 'totalPosts'  }
            //   ]).exec((error : any, result : any) => {
            //     if(error)
            //       document.totalPosts = 0;
            //     else 
            //       document.totalPosts = result[0].totalPosts;               
            //     console.log('New Document ', document.totalPosts , document);  
            //     const jwt = user.schema.methods.generateJwt(document);
            //     return res.status(200).json({success: true, token : jwt });    
            //   });
            // }
            // else {
            //   const jwt = user.schema.methods.generateJwt(document);
            //   res.status(200).json({success: true, token : jwt });
            // }
            const jwt = user.schema.methods.generateJwt(document);
            return res.status(200).json({ success: true, token: jwt });
        }
    }
    getSessionUser(req, res) {
        const token = req.headers.authorization;
        if (!token)
            return { success: false, error: config_1.AUTHORIZATION_HEADER_MISSING };
        try {
            const user = jsonwebtoken_1.default.verify(token, config_1.JWTSECRET);
            return { success: true, user: user['user'] };
        }
        catch (error) {
            return { success: false, error: config_1.TOKEN_EXPIRED_ERROR };
        }
    }
    getMemberProfileDetails(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = [];
            const followers = new followees_1.Followees().countFollowers({ _id: req.query.memberId });
            const mediaPosts = new post_1.PostController().countMediaPosts({ _id: req.query.memberId });
            let memberInfo = { postInfo: yield mediaPosts, followers: yield followers };
            response.push(memberInfo);
            return response;
        });
    }
}
exports.AuthController = AuthController;
