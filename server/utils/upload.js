"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require('multer');
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './server/uploads');
    },
    filename: (req, file, cb) => {
        const filename = new Date().getTime() + '_' + file.originalname;
        cb(null, filename);
    }
});
const upload = multer({ storage: storage });
exports.default = upload;
