"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const clientController_1 = __importDefault(require("./controller/clientController"));
const authenticationMiddleware_1 = require("../middleware/authenticationMiddleware");
const clientRouter = (0, express_1.Router)();
clientRouter.use(authenticationMiddleware_1.isAuthenticated);
const clientController = new clientController_1.default();
clientRouter.post('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().required(),
        cpf: celebrate_1.Joi.string().required(),
        color: celebrate_1.Joi.string().required(),
    },
}), clientController.create);
clientRouter.get('/:id', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().uuid().required(),
    },
}), clientController.show);
exports.default = clientRouter;
