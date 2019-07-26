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
    user: { type: Object, default: null },
    text: { type: String, default: null },
    images: { type: Array, default: [] },
    video: { type: String, defualt: null },
    inReplyToPostId: { type: bson_1.ObjectId, default: null },
    inReplyToUserId: { type: bson_1.ObjectId, default: null },
    coordinates: { type: Object, default: { latitutde: null, longitude: null } },
    place: { type: Object, default: null },
    replyCount: { type: Number, default: 0 },
    reRostCount: { type: Number, default: 0 },
    likeCount: { type: Number, default: 0 },
});
exports.Post = mongoose_1.default.model('Post', exports.postSchema);
// export class PostModel extends Typegoose {
//     @prop({default: Date.now, required: true})
//     createdAt! : Date;
//     @prop({required: true})
//     user!: Object;
//     @prop({default: null})
//     text!: String;
//     @prop({default: null})
//     images!: Array<String>;
//     @prop({default: null})
//     vidoe!: String;
//     @prop({default: null})
//     inReplyToPostId!: String;
//     @prop({default: null})
//     inReplyToUserId!: String;
//     @prop({default: null})
//     coordinates!: Object;
//     @prop({default: null})
//     place!: Object;
//     @prop()
//     replyCount!: Number
//     @prop({default: 0})
//     rePostCount!: Number
//     @prop({default: 0})
//     likeCount!: Number
// }
// export const Post = new PostModel().getModelForClass(PostModel);
