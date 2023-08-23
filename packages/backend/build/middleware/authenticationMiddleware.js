"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const AppError_1 = __importDefault(require("../errors/AppError"));
const httpStatus_1 = require("../config/httpStatus");
const config_1 = require("../config/config");
const isAuthenticated = (request, response, next) => {
    const { authorization } = request.headers;
    if (!authorization)
        throw new AppError_1.default('Token is missing.', httpStatus_1.HttpStatusCode.UNAUTHORIZED);
    const [type, token] = (authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')) || [];
    if (type !== 'Bearer') {
        throw new AppError_1.default('Token type not allowed', httpStatus_1.HttpStatusCode.UNAUTHORIZED);
    }
    if (token !== config_1.AUTHENTICATION_TOKEN) {
        throw new AppError_1.default('Unauthorized token', httpStatus_1.HttpStatusCode.UNAUTHORIZED);
    }
    return next();
};
exports.isAuthenticated = isAuthenticated;
