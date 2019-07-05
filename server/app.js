"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = require("./config/config");
const routes_1 = require("./routes/routes");
const cors = require("cors");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.app = express_1.default();
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }
    config() {
        this.app.use(cors());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose_1.default.connect(config_1.DATABASE_URL, { useCreateIndex: true, useNewUrlParser: true });
        const connection = mongoose_1.default.connection;
        connection.once('open', () => {
            console.log('MongoDB connection established successfullly.');
        });
    }
}
exports.default = new App().app;
