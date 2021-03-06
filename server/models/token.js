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
exports.tokenSchema = new mongoose_1.Schema({
    createdAt: { type: Date, required: true, default: Date.now, expires: 43200 },
    token: { type: String, required: true },
    _userId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'User' }
});
exports.Token = mongoose_1.default.model('Token', exports.tokenSchema);
