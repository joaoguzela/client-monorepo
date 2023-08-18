import { EntityRepository, Repository } from 'typeorm';
import Client from '../entities/client';

@EntityRepository(Client)
export default class ClientRepository extends Repository<Client> {
  public async findByName(name: string): Promise<Client | undefined> {
    const user = this.findOne({
      where: {
        name,
      },
    });
    return await user;
  }
  public async findByEmail(email: string): Promise<Client | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });
    return user;
  }
  public async findById(id: string): Promise<Client | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    });
    return user;
  }
}
