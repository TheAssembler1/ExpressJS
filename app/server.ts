import dotenv from 'dotenv';
import TestsController from './Api/Controllers/Tests/TestsController';
import App from './App';

dotenv.config();

const app = new App(
  [
    new TestsController(),
  ]
);

app.listen();
