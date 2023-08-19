import AppError from '../../errors/AppError';
import { ClientType } from '../types/clientType';
import IClientRepository from '../interfaces/IClientRepository';

export default class ClientService {
  constructor(private clientRepository: IClientRepository) {}
  public async create({
    name,
    email,
    cpf,
    color,
  }: ClientType): Promise<ClientType> {
    const emailExist = await this.clientRepository.findByEmail(email);
    if (emailExist) throw new AppError('Email address already used.');
    const client = await this.clientRepository.create({
      name,
      email,
      cpf,
      color,
    });

    if (!client) throw new AppError('Error Create to user', 403);

    await this.clientRepository.save(client);

    return client;
  }
  public async show(id: string): Promise<ClientType> {
    const client = await this.clientRepository.findById(id);

    if (!client) throw new AppError('User not found.');
    return client;
  }
}
