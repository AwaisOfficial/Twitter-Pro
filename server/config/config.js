"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_URL = process.env.host || 'https://twitterpro.herokuapp.com';
//export const CLIENT_URL = 'https://twitterpro.herokuapp.com';
//export const CLIENT_URL = 'https://onlyvips.herokuapp.com';
exports.DATABASE_URL = process.env.DATABASE || 'mongodb+srv://Awais:awais31@twitterclone-cfqlw.mongodb.net/TwitterPro?retryWrites=true&w=majority';
exports.PORT = process.env.PORT || 3000;
exports.JWTSECRET = '$QET_UWN';
exports.ERROR_MSG = 'Something went wrong.';
exports.INVALID_PASSWORD = 'Password is incorrect.';
exports.USER_NOT_FOUND = 'User not found.';
exports.AUTHORIZATION_HEADER_MISSING = 'Missing Authorization Header';
exports.ROLE_AUTHORIZATION_ERROR = 'User doesn\'t have access to this resource.';
exports.TOKEN_EXPIRED_ERROR = 'Token is invalid or expired.';
exports.CLIENT_EMAIL_ADDRESS = 'im.awais.official@gmail.com';
exports.PASSWORD_RESET_MAIL_SENT = 'Please check your email to reset your password.';
exports.PASSWORD_RESET_MAIL_SENT_ERROR = 'Unable to send email.';
exports.UPLOAD_PATH = 'uploads';
exports.COLLECTION_NAME = 'images';
exports.ITEM_UPDATED = 'Item updated successfully.';
exports.ERROR_FOR_UNFOLLOWED_USER = 'Please follow this person to like or comment on his posts.';
exports.TWITTER_CONSUMER_KEY = "E1Pqit9PSS956U2hpfSbnf3MM";
exports.TWITTER_CONSUMER_SECRET = "G8KpfTKSU41QHLYAaowhPPNEoAgTlAudpeJV1DsDWfgDe1EZ14";
exports.SENDGRID_API_KEY = "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";
