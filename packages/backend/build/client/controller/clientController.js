"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientService_1 = __importDefault(require("../service/clientService"));
const httpStatus_1 = require("../../config/httpStatus");
const clientRepository_1 = __importDefault(require("../typeorm/repositories/clientRepository"));
class ClientController {
    async create(request, response, next) {
        const clientService = new clientService_1.default(new clientRepository_1.default());
        const { name, email, cpf, color } = request.body;
        const customer = await clientService.create({
            name,
            email,
            cpf,
            color,
        });
        return response.status(httpStatus_1.HttpStatusCode.CREATED).json(customer);
    }
    async show(request, response, next) {
        const clientService = new clientService_1.default(new clientRepository_1.default());
        const { id } = request.params;
        const customer = await clientService.show(id);
        return response.status(httpStatus_1.HttpStatusCode.OK).json(customer);
    }
}
exports.default = ClientController;
