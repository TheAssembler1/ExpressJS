import express from 'express';
import getTestsRequest from '../../../application/handlers/tests/requests/getTestsRequest.js';
import getAllTestsRequest from '../../../application/handlers/tests/requests/getAllTestsRequest.js';
import putTestsCommand from '../../../application/handlers/tests/commands/putTestsCommand.js';
import postTestCommand from '../../../application/handlers/tests/commands/postTestsCommand.js';
import deleteTestCommand from '../../../application/handlers/tests/commands/deleteTestsCommand.js';

class TestsController{
    constructor() {
        this.path = `${process.env.API_URL}tests`;
        this.router = express.Router();
        this.intializeRoutes();
    }

    intializeRoutes(){
        this.router.get(`${this.path}/:_id`, this.getTest);
        this.router.get(`${this.path}`, this.getAllTests);
        this.router.put(`${this.path}/:_id`, this.putTest);
        this.router.delete(`${this.path}/:_id`, this.deleteTest);
        this.router.post(this.path, this.postTest);
    }

    async getAllTests(request, response){
        const result = await getAllTestsRequest(request, response);
        response.status(200).send(result);
    }

    async getTest(request, response){
        const result = await getTestsRequest(request, response);
        response.status(200).send(result);
    }

    async putTest(request, response){
        await putTestsCommand(request, response);
        response.status(204).send();
    }

    async deleteTest(request, response){
        await deleteTestCommand(request, response);
        response.status(204).send();
    }

    async postTest(request, response){
        const id  = await postTestCommand(request, response);
        response.status(201).send(id);
    }
}

export default TestsController;