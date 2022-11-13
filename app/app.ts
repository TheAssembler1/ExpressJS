
import express from 'express';
import bodyParser from 'body-parser';
import controller from './api/controllers/Controller';
import swaggerUi from 'swagger-ui-express';

class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers: controller[], port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeSwagger();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeSwagger(){
  const swaggerJSDoc: any = require('swagger-jsdoc');
   const  swaggerDefinition: any = require('../swagger.json');

   const options = {
    swaggerDefinition,
    apis: ['app/api/controllers/*.ts'],
   }

   const swaggerSpec = swaggerJSDoc(options);

   this.app.use(
      `${process.env.API_URL}api-docs`,
      swaggerUi.serve,
      swaggerUi.setup(swaggerSpec)
   );
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(controllers: controller[]) {
    controllers.forEach((controller: controller) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;