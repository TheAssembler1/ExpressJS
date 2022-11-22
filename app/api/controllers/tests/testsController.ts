import express from 'express';
import Controller from '../controller';
import getTestsRequest from '../../../application/tests/requests/getTestsRequest';
import putTestsCommand from '../../../application/tests/commands/putTestsCommand';
import postTestCommand from '../../../application/tests/commands/postTestsCommand';
import GetTestsDto from '../../../application/dto/tests/getTestsDto';

class TestsController implements Controller {
    public path = `${process.env.API_URL}tests`;
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    private intializeRoutes(): void {
        this.router.get(`${this.path}/:id`, this.getTest);
        this.router.put(`${this.path}/:id`, this.putTest);
        this.router.post(this.path, this.postTest);
    }

    private getTest(request: express.Request, response: express.Response): void {
        const res: GetTestsDto = getTestsRequest(request, response);
        response.status(200).send(res);
    }

    private putTest(request: express.Request, response: express.Response): void {
        putTestsCommand(request, response);
        response.status(200).send();
    }

    private postTest(request: express.Request, response: express.Response): void {
        const id: string  = postTestCommand(request, response);
        response.status(200).send(id);
    }
}

export default TestsController;