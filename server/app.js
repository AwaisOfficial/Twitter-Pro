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
const passport = require('passport');
const cors = require('cors');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const passportSetup = require('./config/passport-config');
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.app = express_1.default();
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }
    config() {

        var distDir = __dirname + "/dist/";
        this.app.use(express_1.default.static(distDir));

        

        this.app.use(cors({
            origin: config_1.CLIENT_URL,
            methods: "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
            credentials: true // allow session cookie from browser to pass through
        }));
        this.app.use(cookieSession({
            name: "VIP_Session",
            keys: [config_1.JWTSECRET],
            maxAge: 24 * 60 * 60 * 100
        }));
        this.app.use(cookieParser());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
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
