import express, { response } from 'express';
import Controller from './Controller';
import dotenv from 'dotenv';

class TestsController implements Controller{
    public path = `${process.env.API_URL}tests`;
    public router = express.Router();

    constructor(){
        this.intializeRoutes();
    }

    private intializeRoutes(): void{
        this.router.get(this.path, this.getTest);
        this.router.put(this.path, this.putTest);
        this.router.post(this.path, this.postTest);
    }

    /**
    *   @swagger
    *   /pet/findByStatus:
    *   get:
    *       summary: Finds pets by Status
    *       tags:
    *           - Tests
    */
    private getTest(request: express.Request, response: express.Response): void{
        response.send("Hello from getTest");
    }

    /**
    *   @swagger
    *   /api/tests:
    *       put:
    *           summary: Put a test summary
    *           description: Put a test description
    *           tags:
    *               - Tests
    */
    private putTest(request: express.Request, response: express.Response): void{
        response.send("Hello from putTest")
    }

    /**
    *   @swagger
    *   /api/tests:
    *       post:
    *           summary: Post a test summary
    *           description: Post a test description
    *           tags:
    *               - Tests
    */
    private postTest(request: Express.Request, reponse: express.Response): void{
        reponse.send("Hello from postTest");
    }
}

export default TestsController;