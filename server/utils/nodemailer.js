"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
class NodeMailer {
    static sendMail(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: 'im.awais.official@gmail.com',
                    pass: '1$Pakistan'
                }
            });
            transporter.verify((err, success) => {
                if (err)
                    console.error(err);
                console.log('Mail sent successfully to ' + payload.to);
            });
            // send mail with defined transport object
            let info = yield transporter.sendMail({
                from: '"Twitter Pro 👻" no-replytwitterpro@gmail.com',
                to: payload.to,
                subject: payload.subject,
                html: payload.content
            });
            return info;
        });
    }
}
exports.NodeMailer = NodeMailer;
