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
const helper = require('sendgrid').mail;
const config = require("../config/config");
const sg = require('sendgrid')(config.SENDGRID_API_KEY);
class SendGridMailer {
    static sendMail(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const from = new helper.Email('im.awais.official@gmail.com');
            const to = new helper.Email(payload.to);
            const content = new helper.Content('text/html', payload.content);
            const mail = new helper.Mail(from, payload.subject, to, content);
            const request = sg.emptyRequest({
                method: 'POST',
                path: '/v3/mail/send',
                body: mail.toJSON(),
            });
            return yield sg.API(request);
        });
    }
}
exports.SendGridMailer = SendGridMailer;
