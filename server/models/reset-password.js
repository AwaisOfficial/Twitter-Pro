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
exports.passwordResetSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    token: { type: String, required: true },
    expire: { type: String, required: true },
    status: { type: Number }
});
exports.PasswordReset = mongoose_1.default.model('PasswordReset', exports.passwordResetSchema);
