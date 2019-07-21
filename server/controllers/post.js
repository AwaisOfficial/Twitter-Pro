"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../models/post");
class PostController {
    constructor() {
        /* CREATING POST */
        this.createPost = (req, res) => {
            req.body.user = req.user;
            req.body.userId = req.user._id;
            (() => __awaiter(this, void 0, void 0, function* () {
                const post = new post_1.Post(req.body);
                const createdPost = yield post.save();
                console.log('Created Post', createdPost);
                if (createdPost)
                    return res.status(200).json({ success: true, data: post });
                else
                    return res.status(401).json({ success: false, data: null });
            }));
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
