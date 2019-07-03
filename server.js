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
const http = __importStar(require("http"));
const config_1 = require("./server/config/config");

// const httpOptions = {
//     key : fs.readFileSync(path.resolve("../certificates/key.pem")),
//     cert: fs.readFileSync(path.resolve("../certificates/cert.pem"))
// }
// https.createServer({}, app).listen(PORT , () => {
//     console.log('Express server listening on port '+ PORT);
// });
http.createServer(app_1.default).listen(config_1.PORT, () => {
    console.log('Express server listening on port ' + config_1.PORT);
});
