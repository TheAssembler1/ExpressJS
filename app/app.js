
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import mongoose from 'mongoose';
import testsController from './api/controllers/tests/testsController.js';
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerDefinition from '../swagger.json' assert {type: 'json'};

class App {
  // NOTE:: this is a list of all controllers
  controllerList = [
    new testsController(),
  ];

  // NOTE: Seperate the core creation of the app for testing
  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeControllers();
    this.initializeMongoose();
    this.initializeSwagger();
  }

  initializeMongoose() {
    mongoose.connect(String(process.env.DB_URL));
    const mongooseConnection = mongoose.connection;

    mongooseConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }

  initializeSwagger() {
    const options = {
      swaggerDefinition,
      apis: ['app/api/controllers/tests/*.yaml'],
    }

    const swaggerSpec = swaggerJSDoc(options);

    this.app.use(
      `${process.env.API_URL}api-docs`,
      swaggerUi.serve,
      swaggerUi.setup(swaggerSpec)
    );
  }

  initializeMiddlewares(){
    this.app.use(bodyParser.json());
  }

  initializeControllers(){
    this.controllerList.forEach((controller) => {
      this.app.use(`/`, controller.router);
    });
  }

  listen(){
    this.app.listen(Number(process.env.PORT), () => {
      console.log(`App listening at ${String(process.env.APP_URL)}:${Number(process.env.PORT)}`);
    });
  }
}

export default App;