import express, { response } from 'express';
import Controller from './Controller';
import dotenv from 'dotenv';

class TestsController implements Controller{
    public path = `${process.env.API_URL}tests`;
    public router = express.Router();

    constructor(){
        this.intializeRoutes();
    }

    private intializeRoutes(){
        this.router.get(this.path, this.getTest);
        this.router.put(this.path, this.putTest);
        this.router.post(this.path, this.postTest);
    }

    private getTest(request: express.Request, response: express.Response){
        response.send("Hello from getTest");
    }

    private putTest(request: express.Request, response: express.Response){
        response.send("Hello from putTest")
    }

    private postTest(request: Express.Request, reponse: express.Response){
        reponse.send("Hello from postTest");
    }
}

export default TestsController;