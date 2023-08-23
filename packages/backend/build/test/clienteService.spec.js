"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const client_1 = __importDefault(require("../client/typeorm/entities/client"));
const clientService_1 = __importDefault(require("../client/service/clientService"));
const fakeClientRepository_1 = __importDefault(require("../mockToTest/fakeClientRepository"));
describe('CreateCustomer', () => {
    const Repository = new fakeClientRepository_1.default();
    it('should be able to create a new customer', async () => {
        const fakeClientService = new clientService_1.default(Repository);
        const client = await fakeClientService.create({
            name: 'Joao',
            email: 'teste@teste.com',
            cpf: '12345678900',
            color: 'red',
        });
        expect(client).toBeInstanceOf(client_1.default);
    });
    it('should not be able to create two customers with the same email', async () => {
        const fakeClientService = new clientService_1.default(Repository);
        await fakeClientService.create({
            name: 'Joao',
            email: 'teste@teste1.com',
            cpf: '12345678900',
            color: 'red',
        });
        try {
            await fakeClientService.create({
                name: 'joao',
                email: 'teste@teste2.com',
                cpf: '12345678900',
                color: 'red',
            });
        }
        catch (error) {
            console.log(error);
            expect(error.message).toBe('Email address already used.');
        }
    });
    it('should not to create a new customer', async () => {
        try {
            const fakeClientService = new clientService_1.default(Repository);
            await fakeClientService.create({
                name: 'Joao',
                email: 'teste@teste3.com',
                cpf: '',
                color: 'red',
            });
        }
        catch (error) {
            expect(error.message).toBe('Error Create to user');
        }
    });
});
