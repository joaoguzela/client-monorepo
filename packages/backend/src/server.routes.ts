import { Router } from 'express';
import clientRouter from './models/client/client.route';
const routes = Router();

routes.use('/clients', clientRouter);

export default routes;
