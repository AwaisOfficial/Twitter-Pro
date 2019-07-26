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
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./server/app"));
const http = __importStar(require("http"));
const config_1 = require("./server/config/config");
const path = require('path');

// const httpOptions = {
//     key : fs.readFileSync(path.resolve("../certificates/key.pem")),
//     cert: fs.readFileSync(path.resolve("../certificates/cert.pem"))
// }
// https.createServer({}, app).listen(PORT , () => {
//     console.log('Express server listening on port '+ PORT);
// });
http.createServer(app_1.default).listen(process.env.PORT || config_1.PORT, () => {
    console.log('onlyVIP\'s server listening on port ' + config_1.PORT);
    console.log('Host is ',process.env.HOST);
});

var distDir = __dirname + "/dist/onlyVIPs/";
app_1.default.use(express_1.default.static(distDir));       
app_1.default.get('*' , (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/onlyVIPs/index.html'));
});
