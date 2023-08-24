import { ClientType } from '../types/clientType';
import Client from '../typeorm/entities/client';

export default interface IClientRepository {
  create(client: ClientType): Promise<Client | null>;
  save(client: Client): Promise<Client | null>;
  findById(id: string): Promise<Client | null>;
  findByEmail(email: string): Promise<Client | null>;
}
