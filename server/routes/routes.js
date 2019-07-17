"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const upload_1 = __importDefault(require("../utils/upload"));
const config_1 = require("../config/config");
const passport = require('passport');
class Routes {
    constructor() {
        this.authController = new controllers_1.AuthController();
    }
    routes(app) {
        /* Registration */
        app.route('/api/register').post((req, res, next) => {
            // // middleware
            // console.log(`Request from: ${req.originalUrl}`);
            // console.log(`Request type: ${req.method}`);            
            // if(req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e'){
            //     res.status(401).send('You shall not pass!');
            // } else {
            //     next();
            // }                     
            next();
        }, this.authController.validate('register'), this.authController.register);
        app.route('/api/verifyEmail/:token').get(this.authController.verifyEmail);
        app.route('/api/login').post(this.authController.validate('login'), this.authController.login);
        app.route('/api/twitter-login').get(passport.authenticate('twitter'));
        app.route('/api/twitter-callback').get(passport.authenticate('twitter', { failureRedirect: config_1.CLIENT_URL + 'login?isAuthenticated=false',
            successRedirect: config_1.CLIENT_URL + '/login?isAuthenticated=true'
        }));
        app.get('/api/twitter-profile', this.authController.twitterProfile);
        app.route('/api/forgot-password').post(this.authController.validate('forgot-password'), this.authController.forgotPassword);
        app.route('/api/reset-password').post(this.authController.validate('reset-password'), this.authController.resetPassword);
        app.post('/api/profile-image', upload_1.default.single('avatar'), (req, res, next) => {
            res.json({ success: true, filename: req.file.filename });
        });
    }
}
exports.Routes = Routes;
