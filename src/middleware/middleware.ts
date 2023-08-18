import { NextFunction, Request, Response } from 'express';
import AppError from 'src/errors/AppError';

export const constructError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  if (error instanceof AppError) {
    return next({
      status: 'error',
      message: error.message,
    });
  }
  next({
    status: 'error',
    message: 'Internal sever error',
  });
};
