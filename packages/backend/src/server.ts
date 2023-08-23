import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './server.routes';
import { NODE_PORT } from './config/config';
import { constructError } from './middleware/constructErrorMiddleware';
import './typeorm';

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(constructError);
app.listen(NODE_PORT, () => {
  console.log(`server route ${NODE_PORT}`);
});
