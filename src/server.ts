import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './server.routes';
import { NODE_PORT } from './config/config';
import { constructError } from './middleware/middleware';
import './typeorm';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(constructError);
app.listen(NODE_PORT, () => {
  console.log(`server route ${NODE_PORT}`);
});
