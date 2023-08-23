"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructError = void 0;
const AppError_1 = __importDefault(require("../errors/AppError"));
const httpStatus_1 = require("../config/httpStatus");
const constructError = (error, request, response, next) => {
    if (error instanceof AppError_1.default) {
        response.status(error.statusCode).json({
            type: 'Application error',
            message: error.message,
        });
    }
    else if (error instanceof Error) {
        response.status(httpStatus_1.HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            type: 'Error',
            message: error.message,
        });
    }
    else {
        response.status(httpStatus_1.HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            type: 'Error',
            message: 'Internal server error',
        });
    }
};
exports.constructError = constructError;
