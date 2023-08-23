import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './server.routes';
import { constructError } from './middleware/constructErrorMiddleware';
import { FRONT_URL, NODE_PORT } from './config/config';
import './typeorm';

const app = express();
const corsOptions = {
  origin: `${FRONT_URL}`,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(constructError);
app.listen(3333, () => {
  console.log(`server route ${NODE_PORT}`);
});
