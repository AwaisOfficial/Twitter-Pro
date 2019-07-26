"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
class AuthGuard {
    constructor() { }
    isAuthorized(roles) {
        return (req, res, next) => {
            /*
            try {
                const token = req.headers.authorization;
                if(!token)
                return this.sendError(AUTHORIZATION_HEADER_MISSING , res);;
                const user = jwt.verify(token, JWTSECRET);
                console.log('User',user);
                if(!user)
                    this.sendError(TOKEN_EXPIRED_ERROR, res);
                if(!roles)
                   next();
                const role = req.method == 'post' ? req.body.role : req.query.role;
                if(roles.indexOf(role) > -1)
                    next();
                else
                    this.sendError(ROLE_AUTHORIZATION_ERROR , res);
            } catch(err) {
                this.sendError(TOKEN_EXPIRED_ERROR , res);
            }
            */
            const token = req.headers.authorization;
            if (!token)
                return this.sendError(config_1.AUTHORIZATION_HEADER_MISSING, res);
            ;
            jsonwebtoken_1.default.verify(token, config_1.JWTSECRET, (error, user) => {
                if (!user) {
                    this.sendError(config_1.TOKEN_EXPIRED_ERROR, res);
                    return;
                }
                if (!roles)
                    next();
                const role = req.method == 'POST' ? req.body.role : req.query.role;
                console.log(req.method, req.body.role, roles);
                if (roles.indexOf(role) > -1)
                    next();
                else
                    this.sendError(config_1.ROLE_AUTHORIZATION_ERROR, res);
            });
        };
    }
    sendError(message, res) {
        return res.status(401).json({ success: false, message: message });
    }
}
exports.AuthGuard = AuthGuard;
