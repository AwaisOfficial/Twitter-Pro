"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../models/post");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const auth_1 = require("./auth");
const utils_1 = require("../utils");
const followees_1 = require("./follow/followees");
const models_1 = require("../models");
class PostController {
    constructor() {
        this.responseHandler = new utils_1.ResponseHandler();
        /*
         Creating Post
        */
        this.createPost = (req, res) => {
            let token = new auth_1.AuthController().getSessionUser(req, res);
            if (!token.success)
                return res.status(200).json(token);
            const user = token.user;
            const data = { text: req.body.text,
                user: user,
                images: req.body.images,
                video: req.body.video,
                inReplyToPostId: req.body.inReplyToPostId,
                inReplyToUserId: req.body.inReplyToUserId
            };
            // const post = new Post(data);
            // post.save((error: any, post: any) => {
            //     if(error)
            //         return res.status(200).json({success: false, error: error});
            //     else {   
            //         return res.status(200).json({success : true, post: post});
            //     }
            // });      
            const response = [];
            const newPost = new post_1.Post(data).save();
            response.push(newPost);
            if (req.body.inReplyToPostId) {
                const updatePost = post_1.Post.findByIdAndUpdate(req.body.inReplyToPostId, { $inc: { replyCount: 1 }, $push: { repliers: user._id } }, { new: true });
                response.push(updatePost);
            }
            Promise.all(response).then((result) => {
                return res.status(200).json({ success: true, response: result });
            }).catch(error => {
                return res.status(200).json({ success: false, error: error });
            });
        };
        /* GETTING RECENT POSTS OF MEMBER */
        this.getPosts = (req, res) => {
            /* For Home */
            if (req.query.routerLink == 'home') {
                const followees = models_1.Follower.find({ follower: req.query.userId }, { followee: 1, _id: 0 });
                followees.then((followees) => {
                    followees = followees.map((following) => { return following['followee'].toString(); });
                    const posts = post_1.Post.aggregate([
                        { $match: { $or: [{ 'user._id': { $in: followees } }, { 'user._id': { $eq: req.query.userId } }] } },
                    ]).sort({ createdAt: -1 }).limit(25);
                    posts.then((result) => {
                        return res.status(200).json({ success: true, total: result.length, response: result });
                    }).catch(error => {
                        return res.status(200).json({ success: false, error: error });
                    });
                }).catch(error => {
                    console.error("Getting Followees Post Error", error);
                    return res.status(200).json({ success: false, error: error });
                });
            }
            else {
                post_1.Post.find({ "user._id": { $eq: req.query.userId } }, (error, posts) => {
                    if (error) {
                        console.error("Post Fetching Error", error);
                        return res.status(200).json({ success: false, error: error });
                    }
                    return res.status(200).json({ success: true, total: posts.length, response: posts, uploadFolderPath: __dirname + '/uploads/' });
                }).sort({ 'createdAt': -1 }).limit(25);
            }
        };
        this.likePost = (req, res) => {
            const isFollowing = new followees_1.Followees().isFollowing(req.body.userId, req.body.memberId);
            isFollowing.then(result => {
                if (!result) {
                    this.responseHandler.sendError(res, config_1.ERROR_FOR_UNFOLLOWED_USER, config_1.ITEM_UPDATED);
                    return;
                }
                const action = req.body.action;
                let payLoad = {};
                if (action == 'like')
                    payLoad = { $inc: { likeCount: 1 }, $push: { likers: req.body.userId } };
                else
                    payLoad = { $inc: { likeCount: -1 }, $pull: { likers: req.body.userId } };
                post_1.Post.findByIdAndUpdate(req.body.postId, payLoad, { new: true }, (error, response) => {
                    if (error || !response)
                        this.responseHandler.sendError(res, config_1.ERROR_MSG, error);
                    else
                        this.responseHandler.sendResponse(res, response, config_1.ITEM_UPDATED);
                });
            }).catch(error => {
                this.responseHandler.sendError(res, config_1.ERROR_MSG, error);
                return;
            });
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
    /* Counting Media Posts Of a Specific Member */
    countMediaPosts(member) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post_1.Post.aggregate([
                {
                    $match: { 'user._id': { $eq: member._id.toString() } }
                },
                {
                    $group: {
                        _id: "user._id",
                        totalImages: {
                            $sum: { "$size": "$images" }
                        },
                        totalVideos: {
                            $sum: {
                                $cond: [
                                    { $ne: ["$video ", null] },
                                    1,
                                    0
                                ]
                            }
                        },
                        totalLikes: {
                            $sum: {
                                $cond: [
                                    { $gt: ["$likeCount", 0] },
                                    1,
                                    0
                                ]
                            }
                        }
                    }
                },
                {
                    $project: { _id: 0, totalImages: 1, totalVideos: 1, totalLikes: 1 }
                }
            ]).exec();
        });
    }
}
exports.PostController = PostController;
