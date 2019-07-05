"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require('multer');
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.warn('Direcotry is', __dirname);
        cb(null, path.join(__dirname+'/uploads'));
    },
    filename: (req, file, cb) => {
        const filename = new Date().getTime() + '_' + file.originalname;
        cb(null, filename);
    }
});
const upload = multer({ storage: storage });
exports.default = upload;
