import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ClientController from './clientController';
import { isAuthenticated } from '../middleware/authenticationMiddleware';

const clientRouter = Router();

clientRouter.use(isAuthenticated);

const clientController = new ClientController();
clientRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      cpf: Joi.string().required(),
      color: Joi.string().required(),
    },
  }),
  clientController.create,
);

clientRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  clientController.show,
);
export default clientRouter;
