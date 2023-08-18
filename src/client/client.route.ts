import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ClientController from './clientController';

const clientController = new ClientController();
const clientRouter = Router();

clientRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      cpf: Joi.string()
      .required(),
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
