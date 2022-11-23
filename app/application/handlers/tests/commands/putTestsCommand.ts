import express from 'express';
import PutTestsDto from '../../../dto/tests/putTestsDto';

async function putTestsCommand(request: express.Request, response: express.Response): Promise<void> {
    const requestBody: PutTestsDto = request.body;

    console.log(request.params.id);
    console.log(requestBody);
}

export default putTestsCommand;