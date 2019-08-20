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
exports.followerSchema = new mongoose_1.Schema({
    follower: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    followee: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    startDate: { type: Date, default: Date.now },
});
exports.Follower = mongoose_1.default.model('Follower', exports.followerSchema);
