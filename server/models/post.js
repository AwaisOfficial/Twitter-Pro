"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
// export const postSchema = new Schema ({
//     created_at : { type: Date, default : Date.now },
//     user : { type : Object , default : null },
//     user_id : { type : ObjectId , required : true },
//     text : { type: String , default : null},
//     images : { type: Array , default : [] } ,
//     video : { type : String , defualt: null },
//     in_reply_to_post_id : { type : ObjectId , default : null },
//     in_reply_to_user_id : { type : ObjectId , default : null },
//     coordinates : { type : Object , default : { latitutde : null, longitude : null} },
//     place : { type : Object, default : null },
//     reply_count : { type : Number , default : 0 },
//     re_post_count : { type : Number , default : 0 },
//     like_count : { type : Number , default : 0 },
// });
// export const Post = mongoose.model('Post', postSchema)
class Post extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], Post.prototype, "created_at", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Post.prototype, "user", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Post.prototype, "user_id", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Post.prototype, "text", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], Post.prototype, "images", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Post.prototype, "vidoe", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Post.prototype, "in_reply_to_post_id", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Post.prototype, "in_reply_to_user_id", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Object)
], Post.prototype, "coordinates", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Object)
], Post.prototype, "place", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Post.prototype, "reply_count", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Post.prototype, "re_post_count", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Post.prototype, "like_count", void 0);
exports.Post = Post;
