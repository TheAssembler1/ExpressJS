exports.initializeMongoose = () => {
  const mongoose = require('mongoose');

  mongoose.connect(String(process.env.DB_URL));
  const mongooseConnection = mongoose.connection;

  mongooseConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

exports.initializeSwagger = (app) => {
  const swaggerJSDoc = require('swagger-jsdoc');
  const swaggerDefinition = require('../swagger.json');
  const swaggerUi = require('swagger-ui-express');

  const options = {
    swaggerDefinition,
    apis: ['app/api/controllers/tests/*.yaml'],
  }

  const swaggerSpec = swaggerJSDoc(options);

  app.use(
    `${process.env.API_URL}api-docs`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
  );
}

exports.initializeMiddlewares = (app) => {
  const bodyParser = require('body-parser');

  app.use(bodyParser.json());
}

exports.initializeControllers = (app) => {
  const TestsController = require('./api/controllers/tests/testsController.js');

  const controllerList = [
    new TestsController()
  ];

  controllerList.forEach((controller) => {
    app.use(`/`, controller.router);
  });
}

exports.initializeApp = (app) => {
  exports.initializeMiddlewares(app);
  exports.initializeControllers(app);
  exports.initializeSwagger(app);
  exports.initializeMongoose();
}

exports.listen = (app) => {
  app.listen(Number(process.env.PORT), () => {
    console.log(`App listening at ${String(process.env.APP_URL)}:${Number(process.env.PORT)}`);
  });
}

exports.app = require('express')();