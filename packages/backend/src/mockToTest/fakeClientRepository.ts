import { v4 as uuidv4 } from 'uuid';
import { ClientType } from '../modules/client/types/clientType';
import Client from '../modules/client/typeorm/entities/client';
import IClientRepository from '../modules/client/interfaces/IClientRepository';
class FakeClientRepository implements IClientRepository {
  constructor(private clients: Client[] = []) {}
  public async create({
    name,
    email,
    cpf,
    color,
  }: ClientType): Promise<Client | null> {
    const client = new Client();
    client.id = uuidv4();
    client.name = name;
    client.email = email;
    client.cpf = cpf;
    client.color = color;
    client.created_at = new Date();
    client.updated_at = new Date();
    this.clients.push(client);

    return client;
  }

  public async save(client: Client): Promise<Client> {
    Object.assign(this.clients, client);

    return client;
  }

  public async findById(id: string): Promise<Client | null> {
    const client = this.clients.find(client => client.id === id);
    return client ? client : null;
  }
  public async findByEmail(email: string): Promise<Client | null> {
    const client = this.clients.find(client => client.email === email);
    return client ? client : null;
  }
}

export default FakeClientRepository;
