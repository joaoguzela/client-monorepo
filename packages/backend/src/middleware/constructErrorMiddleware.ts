import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import { HttpStatusCode } from '@config/httpStatus';

export const constructError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      type: 'Application error',
      message: error.message,
    });
  } else if (error instanceof Error) {
    response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      type: 'Error',
      message: error.message,
    });
  } else {
    response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      type: 'Error',
      message: 'Internal server error',
    });
  }
};
