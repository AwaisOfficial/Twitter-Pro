"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const bson_1 = require("bson");
exports.postSchema = new mongoose_1.Schema({
    createdAt: { type: Date, default: Date.now },
    images: { type: Array, default: [] },
    inReplyToPostId: { type: bson_1.ObjectId, default: null },
    inReplyToUserId: { type: bson_1.ObjectId, default: null },
    likeCount: { type: Number, default: 0 },
    likers: { type: Array, default: [] },
    location: { type: Object, default: { latitutde: null, longitude: null } },
    place: { type: Object, default: null },
    replyCount: { type: Number, default: 0 },
    repliers: { type: Array, default: [] },
    rePosters: { type: Array, default: [] },
    rePostCount: { type: Number, default: 0 },
    text: { type: String, default: null },
    userId: { type: String, default: null },
    video: { type: Object, defualt: null },
});
exports.Post = mongoose_1.default.model('Post', exports.postSchema);
