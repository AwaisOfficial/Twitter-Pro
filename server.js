"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./server/app"));
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const http = __importStar(require("http"));
const config_1 = require("./server/config/config");

// const httpOptions = {
//     key : fs.readFileSync(path.resolve("../certificates/key.pem")),
//     cert: fs.readFileSync(path.resolve("../certificates/cert.pem"))
// }
// https.createServer({}, app).listen(PORT , () => {
//     console.log('Express server listening on port '+ PORT);
// });

app_1.default.use(express_1.default.static(__dirname + '/dist/TwitterPro/'));
app_1.default.get('/*' , (req , res) => {
  res.sendFile(path.join(__dirname + '/dist/TwitterPro/index.html'));
});

http.createServer(app_1.default).listen(process.env.PORT || config_1.PORT, () => {
    console.log('Express server listening on port ' + config_1.PORT);
});


// var express = require('express');
// var path =  require('path');

// var app = express();

// app.use(express.static(__dirname + '/dist/TwitterPro/'));

// app.listen(process.env.PORT || 3000 ,() => console.log("Express Server listening."));

// app.get('/*' , (req , res) => {
//     res.sendFile(path.join(__dirname + '/dist/TwitterPro/index.html'));
// });