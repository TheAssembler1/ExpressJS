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

    private async getTest(request: express.Request, response: express.Response): Promise<void> {
        const result = await getTestsRequest(request, response);
        response.status(200).send(result);
    }

    private async putTest(request: express.Request, response: express.Response): Promise<void> {
        await putTestsCommand(request, response);
        response.status(200).send();
    }

    private async deleteTest(request: express.Request, response: express.Response): Promise<void> {
        await deleteTestCommand(request, response);
        response.status(200).send();
    }

    private async postTest(request: express.Request, response: express.Response): Promise<void> {
        const id: string  = await postTestCommand(request, response);
        response.status(200).send(id);
    }
}

export default TestsController;