"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config/config");
class ResponseHandler {
    sendResponse(res, data, message) {
        return res.status(200).json({ success: true, response: data ? data : [], message: message ? message : '' });
    }
    sendError(res, message, error) {
        return res.status(200).json({ success: false, error: error ? error : '', message: message ? message : config_1.ERROR_MSG });
    }
}
exports.ResponseHandler = ResponseHandler;
