"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const config_1 = require("../config/config");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.userSchema = new mongoose_1.Schema({
    first_name: { type: String },
    last_name: { type: String },
    user_name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    role: { type: String, required: true, default: 'user' },
    created_at: { type: Date, default: new Date() },
    password: { type: String },
    avatar: { type: String, required: true },
    salt: { type: String, default: config_1.JWTSECRET },
    isVerified: { type: Boolean, default: false },
    isSuspended: { type: Boolean, default: false },
    isDefaulted: { type: Boolean, default: false },
});
exports.userSchema.method('createHash', (password) => {
    return bcryptjs_1.default.hashSync(password);
});
exports.userSchema.method('comparePassword', function (password, user) {
    if (bcryptjs_1.default.compareSync(password, user.password))
        return true;
    return false;
});
exports.userSchema.method('generateJwt', function (user) {
    console.log('User', user);
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jsonwebtoken_1.default.sign({
        user: user,
        exp: expiry.getTime() / 10000
    }, config_1.JWTSECRET);
});
exports.userSchema.method('emailVerifier', function (email) {
    exports.User.findOne({ email: email }, (error, res) => {
        if (error)
            return false;
        else
            return true;
    });
});
exports.User = mongoose_1.default.model('User', exports.userSchema);
