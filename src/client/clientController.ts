import { Request, Response } from 'express';
import ClientService from './clientService';

export default class ClientController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response | undefined> {
    try {
      const clientService = new ClientService();
      const { name, email, cpf, color } = request.body;
      const customer = await clientService.create({
        name,
        email,
        cpf,
        color,
      });
      return response.json(customer);
    } catch (error) {
      response.end(error);
    }
  }

  public async show(
    request: Request,
    response: Response,
  ): Promise<Response | undefined> {
    try {
      const clientService = new ClientService();
      const { id } = request.params;
      const customer = await clientService.show(id);
      return response.json(customer);
    } catch (error) {
      response.end(error);
    }
  }
}
