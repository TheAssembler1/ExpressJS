import dotenv from 'dotenv';
import Controller from './api/controllers/controller';
import TestsController from './api/controllers/tests/testsController';
import App from './app';

dotenv.config();

// NOTE:: this is a list of all controllers
const controllerList: Controller[] = [
  new TestsController(),
];

const app = new App(
  controllerList
);

app.listen();
