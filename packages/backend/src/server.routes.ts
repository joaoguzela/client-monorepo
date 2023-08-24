import { Router } from 'express';
import clientRouter from '@modules/client/client.route';
const routes = Router();

routes.use('/clients', clientRouter);

export default routes;
