import dotenv from 'dotenv';
import TestsController from './api/controllers/TestsController';
import App from './app';

dotenv.config();

const app = new App(
  [
    new TestsController(),
  ],
  Number(process.env.PORT)
);

app.listen();
