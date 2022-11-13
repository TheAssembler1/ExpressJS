import express, { response } from 'express';
import Controller from './Controller';
import getTestsRequest from '../application/Tests/Requests/GetTestsRequest';
import putTestsCommand from '../application/Tests/Commands/PutTestsCommand';
import postTestCommand from '../application/Tests/Commands/PostTestsCommand';

class TestsController implements Controller {
    public path = `${process.env.API_URL}tests`;
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    private intializeRoutes(): void {
        this.router.get(this.path, this.getTest);
        this.router.put(this.path, this.putTest);
        this.router.post(this.path, this.postTest);
    }

    /**
    *   @swagger
    *   /api/tests:
    *       get:
    *           summary: Get all users in the system
    *           description: Get a test description
    *           tags:
    *               - Tests
    */
    private getTest(request: express.Request, response: express.Response): void {
        getTestsRequest(request, response);
        response.status(200).send();
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
    private putTest(request: express.Request, response: express.Response): void {
        putTestsCommand(request, response);
        response.status(200).send();
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
    private postTest(request: express.Request, response: express.Response): void {
        postTestCommand(request, response);
        response.status(200).send();
    }
}

export default TestsController;