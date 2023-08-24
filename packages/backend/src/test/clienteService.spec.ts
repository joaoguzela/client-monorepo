import 'reflect-metadata';
import AppError from '../errors/AppError';
import Client from '../modules/client/typeorm/entities/client';
import ClientService from '../modules/client/service/clientService';
import FakeClientRepository from '../mockToTest/fakeClientRepository';

describe('CreateCustomer', () => {
  const Repository = new FakeClientRepository();
  it('should be able to create a new customer', async () => {
    const fakeClientService = new ClientService(Repository);
    const client = await fakeClientService.create({
      name: 'Joao',
      email: 'teste@teste.com',
      cpf: '12345678900',
      color: 'red',
    });
    expect(client).toBeInstanceOf(Client);
  });

  it('should not be able to create two customers with the same email', async () => {
    const fakeClientService = new ClientService(Repository);

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
    } catch (error) {
      if (error instanceof AppError) {
        expect(error.message).toBe('Email address already used.');
      }
    }
  });
  it('should not to create a new customer', async () => {
    try {
      const fakeClientService = new ClientService(Repository);
      await fakeClientService.create({
        name: 'Joao',
        email: 'teste@teste3.com',
        cpf: '',
        color: 'red',
      });
    } catch (error) {
      if (error instanceof AppError) {
        expect(error.message).toBe('Error Create to user');
      }
    }
  });
});
