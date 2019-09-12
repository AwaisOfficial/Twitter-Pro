"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const upload_1 = require("../utils/upload");
const config_1 = require("../config/config");
const auth_guard_1 = require("../utils/auth-guard");
const multer = require('multer');
const passport = require('passport');
const path = require('path');
const fs = require('fs');
class Routes {
    constructor() {
        this.authController = new controllers_1.AuthController();
        this.postController = new controllers_1.PostController();
        this.suggestion = new controllers_1.Suggestion();
        this.authGuard = new auth_guard_1.AuthGuard();
        this.followees = new controllers_1.Followees();
        this.paymentCtrl = new controllers_1.PaymentController();
    }
    routes(app) {
        app.route("/api/files/:image").get((req, res) => {
            //console.log('Image Name ', req.params.image);
            const filePath = path.join(__dirname, "../uploads/" + req.params.image);
            const placeholder = path.join(__dirname, "../uploads/placeholder.jpg");
            try {
                if (fs.existsSync(filePath))
                    res.sendFile(filePath);
                else
                    res.sendFile(placeholder);
            }
            catch (err) {
                console.error('File Not Found Error ', err);
                res.sendFile(placeholder);
            }
        });
        /* Registration */
        app.route('/api/register').post((req, res, next) => {
            //middleware
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
        app.route('/api/user-profile').get(this.authController.userProfile);
        app.route('/api/member-profile').get(this.authController.memberProfileDetails);
        app.route('/api/update-profile').post(this.authController.updateProfile);
        app.route('/api/update-password').post(this.authController.updatePassword);
        app.route('/api/forgot-password').post(this.authController.validate('forgot-password'), this.authController.forgotPassword);
        app.route('/api/reset-password').post(this.authController.validate('reset-password'), this.authController.resetPassword);
        app.post('/api/profile-image', upload_1.upload.single('avatar'), (req, res) => {
            res.json({ success: true, filename: req.file.filename });
        });
        app.post('/api/upload-images', (req, res) => {
            upload_1.postUploads(req, res, (error) => {
                if (error instanceof multer.MulterError) {
                    console.error(error);
                    return res.json({ success: false, message: "Error uploading file." });
                }
                res.json({ success: true, messsage: "Files are uploaded ", files: req.files });
            });
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
                if (error instanceof multer.MulterError) {
                    console.error(error);
                    return res.json({ success: false, message: "Error uploading file." });
                }
                res.json({ success: true, messsage: "Files are uploaded ", files: req.files });
            });
        });
        app.route('/api/get-posts').get(this.postController.getPosts);
        app.route('/api/like-post').post(this.postController.likePost);
        /* FOLLOW ROUTES  */
        app.route('/api/suggested-people').get(this.suggestion.getSuggestedPeople);
        app.route('/api/start-following').post(this.authGuard.isAuthorized(['member', 'user']), this.followees.startFollowing);
        app.route('/api/get-followees-posts').get(this.followees.getFolloweesPosts);
        /* PAYMENT ROUTES */
        app.route('/api/prepare-checkout').get(this.paymentCtrl.prepareCheckOut);
    }
}
exports.Routes = Routes;
