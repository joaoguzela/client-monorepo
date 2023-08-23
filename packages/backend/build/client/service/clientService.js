"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../errors/AppError"));
class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async create({ name, email, cpf, color, }) {
        const emailExist = await this.clientRepository.findByEmail(email);
        if (emailExist)
            throw new AppError_1.default('Email address already used.');
        const client = await this.clientRepository.create({
            name,
            email,
            cpf,
            color,
        });
        if (!client)
            throw new AppError_1.default('Error Create to user', 403);
        await this.clientRepository.save(client);
        return client;
    }
    async show(id) {
        const client = await this.clientRepository.findById(id);
        if (!client)
            throw new AppError_1.default('User not found.');
        return client;
    }
}
exports.default = ClientService;
