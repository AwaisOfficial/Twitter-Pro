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
const nodemailer = require("nodemailer");
const express_validator_1 = require("express-validator");
const models_1 = require("../models/");
const config_1 = require("../config/config");
const bson_1 = require("bson");
let User = mongoose.model('User', models_1.userSchema);
let PasswordReset = mongoose.model('PasswordReset', models_1.passwordResetSchema);
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
                if (isCompared) {
                    const jwt = user.schema.methods.generateJwt(document);
                    res.status(200).json({ success: true, token: jwt });
                }
                else
                    res.status(200).json({ success: false, message: config_1.INVALID_PASSWORD });
            }).catch(error => {
                console.error("Error", error);
                res.status(200).json(error);
            });
        };
        this.forgotPassword = (req, res) => {
            this.findUser(req).then(document => {
                console.log('Document ', document);
                if (!document) {
                    res.status(200).json({ success: false, message: config_1.USER_NOT_FOUND });
                    return;
                }
                PasswordReset.findOne({ userId: document._id }, (err, resetPassword) => {
                    console.log('Password Reset', resetPassword);
                    if (resetPassword)
                        PasswordReset.deleteOne({ userId: document._id });
                    const token = crypto_1.default.randomBytes(32).toString('hex');
                    const entry = { userId: document._id, token: token, expire: new Date().getTime() + (3600 * 1000), status: 0 };
                    PasswordReset.create(entry).then((response) => {
                        //this.send_Mail(res, document, token);
                        console.log(token);
                        this.sendMail(res, document, token).then(mailResponse => {
                            console.log(mailResponse);
                            return res.json({ success: true, message: config_1.PASSWORD_RESET_MAIL_SENT });
                        })
                            .catch(error => {
                            console.error(error);
                            return res.json({ success: true, message: config_1.PASSWORD_RESET_MAIL_SENT_ERROR });
                        });
                    }).catch(error => {
                        console.error("Password Reset Creation Error", error);
                        res.status(200).json({ success: false, message: config_1.ERROR_MSG });
                    });
                });
            }).catch(error => {
                console.error("Error", error);
                res.status(500).json(error);
            });
        };
        this.resetPassword = (req, res) => {
            PasswordReset.findOne({ userId: req.body.userId }, (err, result) => {
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
                User.updateOne({ _id: new bson_1.ObjectId(req.body.userId) }, { $set: { password: hash } }, (err, response) => {
                    PasswordReset.deleteOne({ userId: req.body.userId }).then(result => {
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
        this.validate = (method) => {
            switch (method) {
                case 'register':
                    return [
                        express_validator_1.body('user_name', 'User name is required.').exists(),
                        express_validator_1.body('email', 'Email is required.').exists(),
                        express_validator_1.body('email', 'Email is invalid.').isEmail(),
                        express_validator_1.body('password', ' Password is required.').exists(),
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
    register(req, res) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(200).json({ success: false, error: errors });
            return;
        }
        let user = new User(req.body);
        user.password = user.schema.methods.createHash(req.body.password);
        //console.log('User', user);
        user.save((err, response) => {
            if (err){
                if(err.errmsg && err.errmsg.indexOf('email') > -1)
                 err.errmsg = 'Email already exists';
                else if(err.errmsg && err.errmsg.indexOf('user_name') > -1)
                 err.errmsg = 'Username already exists.';
                res.status(200).json({ success: false, message: err.errmsg || '' });
            }
            else {
                const jwt = user.schema.methods.generateJwt(response);
                res.status(200).json({ token: jwt , message : 'Account created successfully. Welcome to Twitter Pro.'});
            }
        });
    }
    sendMail(res, user, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: 'im.awais.official@gmail.com',
                    pass: '1$Pakistan'
                }
            });
            transporter.verify((err, success) => {
                if (err)
                    console.error(err);
                console.log('Your config is correct');
            });
            // send mail with defined transport object
            let info = yield transporter.sendMail({
                from: '"Twitter Pro 👻" im.awais.official@gmail.com',
                to: user.email,
                subject: 'Password Reset',
                html: '<h4><b>Twitter Pro:</b></h4>' +
                    '<p>To reset your password, Go to the following url and follow the instructions.:</p>' +
                    '<a href=' + config_1.CLIENT_URL + 'reset/' + user.id + '/' + token + '">Click Here</a>' +
                    '<br><br>' +
                    '<p>--Twitter Pro Team --</p>'
            });
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            return info;
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
}
exports.AuthController = AuthController;
