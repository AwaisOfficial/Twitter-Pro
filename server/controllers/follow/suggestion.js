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
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const auth_1 = require("../auth");
const followers_1 = require("./followers");
class Suggestion {
    constructor() {
        this.getSuggestedPeople = (req, res) => {
            const currentFollowings = new followers_1.Followers().getCurrentFollowings(req, res);
            currentFollowings.then((followees) => {
                if (!followees)
                    return this.sendError(res);
                followees = followees.map((following) => { return following['followee']; });
                const token = new auth_1.AuthController().getSessionUser(req, res);
                followees.push(token.user._id);
                const distinctMembers = this.getDistinctMembers(followees);
                distinctMembers.then((members) => {
                    return res.status(200).json({ success: true, response: members });
                }).catch(error => {
                    console.error('Distinct Member Error', error);
                    return this.sendError(res, error);
                });
            }).catch(error => {
                console.error('Current Followings Error', error);
                return this.sendError(res, error);
            });
        };
    }
    getDistinctMembers(followings) {
        return __awaiter(this, void 0, void 0, function* () {
            const distinctMembers = yield models_1.User.find({ _id: { $nin: followings }, role: { $eq: 'member' } });
            return distinctMembers;
        });
    }
    sendError(res, error, message) {
        return res.status(200).json({ success: false, message: message ? message : config_1.ERROR_MSG, error: error });
    }
}
exports.Suggestion = Suggestion;
