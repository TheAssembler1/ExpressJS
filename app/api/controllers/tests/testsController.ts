import express from 'express';
import Controller from '../controller';
import getTestsRequest from '../../../application/handlers/tests/requests/getTestsRequest';
import putTestsCommand from '../../../application/handlers/tests/commands/putTestsCommand';
import postTestCommand from '../../../application/handlers/tests/commands/postTestsCommand';
import deleteTestCommand from '../../../application/handlers/tests/commands/deleteTestsCommand';
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
        this.router.delete(`${this.path}/:id`, this.deleteTest);
        this.router.post(this.path, this.postTest);
    }

    private getTest(request: express.Request, response: express.Response): void {
        getTestsRequest(request, response)
            .then((res) => response.status(200).send(res))
            .catch(err => console.error(err));
    }

    private putTest(request: express.Request, response: express.Response): void {
        putTestsCommand(request, response);
        response.status(200).send();
    }

    private deleteTest(request: express.Request, response: express.Response): void {
        deleteTestCommand(request, response);
        response.status(200).send();
    }

    private postTest(request: express.Request, response: express.Response): void {
        const id: string  = postTestCommand(request, response);
        response.status(200).send(id);
    }
}

export default TestsController;