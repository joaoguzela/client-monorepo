"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const client_1 = __importDefault(require("../entities/client"));
class ClientRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(client_1.default);
    }
    async findByEmail(email) {
        const user = await this.ormRepository.findOne({
            where: {
                email,
            },
        });
        return user;
    }
    async findById(id) {
        const user = await this.ormRepository.findOne({
            where: {
                id,
            },
        });
        return user;
    }
    async create({ name, email, cpf, color, }) {
        const user = this.ormRepository.create({ name, email, cpf, color });
        await this.ormRepository.save(user);
        return user;
    }
    async save(client) {
        return this.ormRepository.save(client);
    }
}
exports.default = ClientRepository;
