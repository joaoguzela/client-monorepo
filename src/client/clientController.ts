import { NextFunction, Request, Response } from 'express';
import ClientService from './clientService';
import AppError from '../errors/AppError';
import { HttpStatusCode } from '../config/httpStatus';

export default class ClientController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | undefined> {
    const clientService = new ClientService();
    const { name, email, cpf, color } = request.body;
    const customer = await clientService.create({
      name,
      email,
      cpf,
      color,
    });
    return response.status(201).json(customer);
  }

  public async show(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response> {
    try {
      const clientService = new ClientService();
      const { id } = request.params;
      const customer = await clientService.show(id);
      return response.json(customer);
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json(error);
      } else if (error instanceof Error) {
        return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
          description: error.message,
          status: HttpStatusCode.INTERNAL_SERVER_ERROR,
        });
      } else {
        return response.end(error);
      }
    }
  }
}
