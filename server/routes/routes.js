"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const upload_1 = require("../utils/upload");
const multer = require('multer');
const config_1 = require("../config/config");
const auth_guard_1 = require("../utils/auth-guard");
const passport = require('passport');
class Routes {
    constructor() {
        this.authController = new controllers_1.AuthController();
        this.postController = new controllers_1.PostController();
        this.authGuard = new auth_guard_1.AuthGuard();
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
        app.route('/api/forgot-password').post(this.authController.validate('forgot-password'), this.authController.forgotPassword);
        app.route('/api/reset-password').post(this.authController.validate('reset-password'), this.authController.resetPassword);
        app.post('/api/profile-image', upload_1.upload.single('avatar'), (req, res) => {
            res.json({ success: true, filename: req.file.filename });
        });
        app.route('/api/twitter-login').get(passport.authenticate('twitter'));
        app.route('/api/twitter-callback').get(passport.authenticate('twitter', { failureRedirect: config_1.CLIENT_URL + '/login?isAuthenticated=false',
            successRedirect: config_1.CLIENT_URL + '/login?isAuthenticated=true'
        }));
        app.route('/api/twitter-profile').get(this.authController.twitterProfile);
        /* ROUTES WHICH REQUIRED AUTHORIZATION  */
        app.route('/api/create-post').post(this.postController.createPost);
        app.post('/api/post-images', (req, res) => {
            upload_1.postUploads(req, res, (error) => {
                //console.log(req.files);
                if (error instanceof multer.MulterError) {
                    console.error(error);
                    return res.json({ success: false, message: "Error uploading file." });
                }
                res.json({ success: true, messsage: "Files are uploaded ", files: req.files });
            });
        });
    }
}
exports.Routes = Routes;
