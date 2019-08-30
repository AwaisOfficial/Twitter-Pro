"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const querystring_1 = __importDefault(require("querystring"));
const config_1 = require("../config/config");
class PaymentController {
    constructor() {
        this.prepareCheckOut = (req, res) => {
            const path = '/v1/checkouts';
            const data = querystring_1.default.stringify({
                'entityId': '8a82941756a2ab6f0156c1726c0b4d22',
                'amount': '92.00',
                'currency': 'EUR',
                'paymentType': 'DB'
            });
            const options = {
                port: 443,
                host: 'https://test.oppwa.com',
                path: path,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': data.length,
                    'Authorization': 'Bearer OGE4Mjk0MTc1NmEyYWI2ZjAxNTZjMTcyNmQ3NTRkMjZ8Rk1EOVdSRTRocQ=='
                }
            };
            const postRequest = https_1.default.request(options, function (response) {
                response.setEncoding('utf8');
                response.on('data', (chunk) => {
                    const jsonRes = JSON.parse(chunk);
                    console.log(jsonRes);
                    if (jsonRes)
                        return res.status(200).json({ success: true, response: jsonRes });
                    else
                        return res.status(200).json({ success: false, response: config_1.ERROR_MSG });
                });
            });
            postRequest.write(data);
            postRequest.end();
        };
    }
}
exports.PaymentController = PaymentController;
