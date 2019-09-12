"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require('multer');
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //cb(null, './src/uploads');
        cb(null, './server/uploads');
    },
    filename: (req, file, cb) => {
        const filename = new Date().getTime() + '_' + file.originalname;
        console.log('File Name ', filename);
        cb(null, filename);
    }
});
exports.postUploads = multer({ storage: storage }).array('postFiles');
exports.upload = multer({ storage: storage });
exports.default = exports.upload;
