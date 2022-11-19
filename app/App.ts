
import express from 'express';
import bodyParser from 'body-parser';
import controller from './api/controllers/controller';
import swaggerUi from 'swagger-ui-express';
import mongoose from 'mongoose';

class App {
  public app: express.Application;

  constructor(controllers: controller[]) {
    this.app = express();

    this.initializeMongoose();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeSwagger();
  }

  private initializeMongoose() {
    mongoose.connect(String(process.env.DB_URL));
    const mongooseConnection = mongoose.connection;

    mongooseConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
  }

  private initializeSwagger(): void {
    const swaggerJSDoc: any = require('swagger-jsdoc');
    const swaggerDefinition: any = require('../swagger.json');

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

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers: controller[]): void {
    controllers.forEach((controller: controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen(): void {
    this.app.listen(Number(process.env.PORT), () => {
      console.log(`App listening at ${String(process.env.APP_URL)}:${Number(process.env.PORT)}`);
    });
  }
}

export default App;