import AppError from '../errors/AppError';
import { ClientType } from './type/clientType';
import ClientRepository from './typeorm/repositories/clientRepository';
import { getCustomRepository } from 'typeorm';

export default class ClientService {
  public async create({
    name,
    email,
    cpf,
    color,
  }: ClientType): Promise<ClientType> {
    const clientRepository = getCustomRepository(ClientRepository);

    const emailExist = await clientRepository.findByEmail(email);
    if (emailExist) throw new AppError('Email address already used.');
    const client = clientRepository.create({
      name,
      email,
      cpf,
      color,
    });

    if (!client) throw new AppError('Error Create to user', 403);

    await clientRepository.save(client);

    return client as ClientType;
  }
  public async show(id: string): Promise<ClientType> {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findById(id);

    if (!client) throw new AppError('User not found.');

    return client as ClientType;
  }
}
