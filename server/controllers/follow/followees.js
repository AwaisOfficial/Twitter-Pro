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
const config_1 = require("../../config/config");
const models_1 = require("../../models");
const suggestion_1 = require("./suggestion");
/* TO WHOM CURRENT USER FOLLOWs */
class Followees {
    constructor() {
        this.suggestion = new suggestion_1.Suggestion();
        this.startFollowing = (req, res) => {
            const follow = new models_1.Follower({
                follower: req.body.follower._id,
                followee: req.body.followee._id
            });
            follow.save((error, response) => {
                if (error || !response)
                    return res.status(200).json({ success: false, message: config_1.ERROR_MSG, error: error });
                else
                    return res.status(200).json({ success: true, response: response });
            });
        };
        this.undoFollowing = (req, res) => {
            const follow = new models_1.Follower(req.body);
            follow.remove((error, response) => {
                if (error || !response)
                    return res.status(200).json({ success: false, message: config_1.ERROR_MSG, error: error });
                else
                    return res.status(200).json({ success: true, response: response });
            });
        };
        /* GETTING FOLLOWEES POSTS */
        this.getFolloweesPosts = (req, res) => {
            this.suggestion.getCurrentFollowings(req, res).then((followees) => {
                followees = followees.map((following) => { return following['followee'].toString(); });
                models_1.Post.find({ 'user._id': { $in: followees } }, (error, posts) => {
                    if (error || !posts) {
                        console.error('All Followees Posts Error', error);
                        return this.sendError(res, error);
                    }
                    return res.status(200).json({ success: true, response: posts });
                }).sort({ createdAt: -1 }).limit(25);
            }).catch(error => {
                console.error("Getting Followees Post Error", error);
                return this.sendError(res, error);
            });
        };
    }
    isFollowing(userId, memberId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.Follower.find({ follower: userId, followee: memberId });
        });
    }
    countFollowers(member) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.Follower.countDocuments({ followee: { $eq: member._id.toString() } }).exec();
        });
    }
    sendError(res, error, message) {
        return res.status(200).json({ success: false, message: message ? message : config_1.ERROR_MSG, error: error });
    }
}
exports.Followees = Followees;
