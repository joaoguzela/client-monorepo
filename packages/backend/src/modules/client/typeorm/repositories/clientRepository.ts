import { Repository } from 'typeorm';
import Client from '../entities/client';
import IClientRepository from '../../interfaces/IClientRepository';
import { ClientType } from '../../types/clientType';
import { dataSource } from '../../../../typeorm';
export default class ClientRepository implements IClientRepository {
  public ormRepository: Repository<Client>;
  constructor() {
    this.ormRepository = dataSource.getRepository(Client);
  }
  public async findByEmail(email: string): Promise<Client | null> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
    });
    return user;
  }
  public async findById(id: string): Promise<Client | null> {
    const user = await this.ormRepository.findOne({
      where: {
        id,
      },
    });
    return user;
  }
  public async create({
    name,
    email,
    cpf,
    color,
  }: ClientType): Promise<Client> {
    const user = this.ormRepository.create({ name, email, cpf, color });
    await this.ormRepository.save(user);
    return user;
  }
  public async save(client: Client): Promise<Client | null> {
    return this.ormRepository.save(client);
  }
}
