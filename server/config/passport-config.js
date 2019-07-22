"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const TwitterStrategy = require('passport-twitter');
const mongoose = __importStar(require("mongoose"));
const passport_1 = __importDefault(require("passport"));
const config_1 = require("../config/config");
const models_1 = require("../models/");
let User = mongoose.model('User', models_1.userSchema);
passport_1.default.serializeUser((user, done) => {
    done(null, user._id);
});
// deserialize the cookieUserId to user in the database
passport_1.default.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
        done(null, user);
    })
        .catch(e => {
        done(new Error("Failed to deserialize an user"));
    });
});
passport_1.default.use('twitter', new TwitterStrategy({
    consumerKey: config_1.TWITTER_CONSUMER_KEY,
    consumerSecret: config_1.TWITTER_CONSUMER_SECRET,
    includeEmail: true,
    callbackURL: '/api/twitter-callback'
}, (token, tokenSecret, profile, done) => __awaiter(this, void 0, void 0, function* () {
    console.log(profile.emails);
    // find current user in UserModel
    const currentUser = yield User.findOne({
        userName: profile.username
    });
    // create new user if the database doesn't have this user
    if (!currentUser) {
        const newUser = {
            firstName: profile.displayName.split(' ')[0],
            lastName: profile.displayName.split(' ')[1],
            userName: profile.username,
            email: profile.emails[0].value ? profile.emails[0].value : 'twitter_mail_' + new Date().getTime() + '@mail.com',
            avatar: profile.photos[0].value ? profile.photos[0].value : '',
            twitterId: profile.id
        };
        const newUser = yield new User(_user).save();
        if (newUser) {
            done(null, newUser);
        }
    }
    done(null, currentUser);
})));
