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
            const token = req.headers.authorization;
            console.log('Token', token);
            if (!token)
                return res.status(200).json({ success: false, error: config_1.AUTHORIZATION_HEADER_MISSING });
            let user = jsonwebtoken_1.default.verify(token, config_1.JWTSECRET);
            const data = { text: req.body.text, user: user['user'], images: req.body.images, video: req.body.video };
            const post = new post_1.Post(data);
            post.save((error, post) => {
                if (error)
                    return res.status(200).json({ success: false, error: error });
                else
                    return res.status(200).json({ success: true, post: post });
            });
        };
        /* GETTING RECENT POSTS OF MEMBER */
        this.getMemberPosts = (req, res) => {
        };
        /* GETTING FOLLOWEES POSTS */
        this.getFolloweesPosts = (req, res) => {
        };
    }
}
exports.PostController = PostController;
