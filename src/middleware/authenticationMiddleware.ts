import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';
import { HttpStatusCode } from '../config/httpStatus';
import { AUTHENTICATION_TOKEN } from '../config/config';

export const isAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  const { authorization } = request.headers;

  if (!authorization)
    throw new AppError('Token is missing.', HttpStatusCode.UNAUTHORIZED);
  const [type, token] = authorization?.split(' ') || [];

  if (type !== 'Bearer') {
    throw new AppError('Token type not allowed', HttpStatusCode.UNAUTHORIZED);
  }

  if (token !== AUTHENTICATION_TOKEN) {
    throw new AppError('Unauthorized token', HttpStatusCode.UNAUTHORIZED);
  }
  return next();
};
