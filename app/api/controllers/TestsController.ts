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
     * @swagger
     * /users:
     *   get:
     *     summary: Retrieve a list of JSONPlaceholder users
     *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
    */
    private getTest(request: express.Request, response: express.Response): void{
        response.send("Hello from getTest");
    }

    private putTest(request: express.Request, response: express.Response): void{
        response.send("Hello from putTest")
    }

    private postTest(request: Express.Request, reponse: express.Response): void{
        reponse.send("Hello from postTest");
    }
}

export default TestsController;