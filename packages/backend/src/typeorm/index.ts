import { DataSource } from 'typeorm';
import Client from '../modules/client/typeorm/entities/client';
import { CreateClients1692316888361 } from './migrations/1692316888361-CreateClients';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'apiclient-db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'client',
  entities: [Client],
  migrations: [CreateClients1692316888361],
});
