import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './server.routes';
import { constructError } from './middleware/constructErrorMiddleware';
import { NODE_PORT } from '@config/config';
import './typeorm';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(constructError);
app.listen(Number(NODE_PORT), '0.0.0.0', () => {
  console.log(`server route ${NODE_PORT}`);
});
