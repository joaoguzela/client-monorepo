"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const client_1 = __importDefault(require("../client/typeorm/entities/client"));
class FakeClientRepository {
    constructor(clients = []) {
        this.clients = clients;
    }
    async create({ name, email, cpf, color, }) {
        const client = new client_1.default();
        client.id = (0, uuid_1.v4)();
        client.name = name;
        client.email = email;
        client.cpf = cpf;
        client.color = color;
        client.created_at = new Date();
        client.updated_at = new Date();
        this.clients.push(client);
        return client;
    }
    async save(client) {
        Object.assign(this.clients, client);
        return client;
    }
    async findById(id) {
        const client = this.clients.find(client => client.id === id);
        return client;
    }
    async findByEmail(email) {
        const client = this.clients.find(client => client.email === email);
        return client;
    }
}
exports.default = FakeClientRepository;
