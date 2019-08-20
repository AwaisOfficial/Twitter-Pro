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
    about: { type: String, default: null },
    avatar: { type: String, default: null },
    birthDate: { type: String, default: null },
    created_at: { type: Date, default: new Date() },
    email: { type: String, unique: true, required: true },
    firstName: { type: String },
    isCelebrity: { type: Boolean, default: false },
    isProfileReviewed: { type: Boolean, default: false },
    reviewStatus: { type: String, default: null },
    reviewComments: { type: String, default: null },
    isVerified: { type: Boolean, default: false },
    isSuspended: { type: Boolean, default: false },
    isDefaulted: { type: Boolean, default: false },
    lastName: { type: String, default: '' },
    location: {
        country: { type: String, default: '' },
        city: { type: String, default: '' },
        address: { type: String, default: '' }
    },
    mobileNumber: { countryCode: { type: Number, default: 0 }, number: { type: Number, default: 0 } },
    password: { type: String },
    profileBanner: { type: String, default: null },
    role: { type: String, required: true, default: 'user' },
    twitterId: { type: String, default: null },
    userName: { type: String, unique: true, required: true }
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
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60 * 100)
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
