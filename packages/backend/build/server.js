"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const celebrate_1 = require("celebrate");
const server_routes_1 = __importDefault(require("./server.routes"));
const config_1 = require("./config/config");
const constructErrorMiddleware_1 = require("./middleware/constructErrorMiddleware");
require("./typeorm");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(server_routes_1.default);
app.use((0, celebrate_1.errors)());
app.use(constructErrorMiddleware_1.constructError);
app.listen(config_1.NODE_PORT, () => {
    console.log(`server route ${config_1.NODE_PORT}`);
});
