import { ClientType } from '../types/clientType';
import Client from '../typeorm/entities/client';

export default interface IClientRepository {
  create(client: ClientType): Promise<Client | undefined>;
  save(client: Client): Promise<Client | undefined>;
  findById(id: string): Promise<Client | undefined>;
  findByEmail(email: string): Promise<Client | undefined>;
}
