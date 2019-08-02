"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../models/post");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
class PostController {
    constructor() {
        /*
         Creating Post
        */
        this.createPost = (req, res) => {
            let token = this.getUser(req, res);
            if (!token.success)
                return res.status(200).json(token);
            const user = token.user;
            const data = { text: req.body.text, user: user, images: req.body.images, video: req.body.video };
            const post = new post_1.Post(data);
            post.save((error, post) => {
                if (error)
                    return res.status(200).json({ success: false, error: error });
                else
                    return res.status(200).json({ success: true, post: post });
            });
        };
        /* GETTING RECENT POSTS OF MEMBER */
        this.getPosts = (req, res) => {
            let token = this.getUser(req, res);
            if (!token.success)
                return res.status(200).json(token);
            const user = token.user;
            post_1.Post.find({ "user._id": { $eq: user._id } }, (error, posts) => {
                if (error) {
                    console.error("Post Fetching Error", error);
                    return res.status(200).json({ success: false, error: error });
                }
                return res.status(200).json({ success: true, posts: posts, uploadFolderPath: __dirname + '/uploads/' });
            }).sort({ 'createdAt': -1 }).limit(25);
        };
        /* GETTING FOLLOWEES POSTS */
        this.getFolloweesPosts = (req, res) => {
        };
    }
    getUser(req, res) {
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
}
exports.PostController = PostController;
