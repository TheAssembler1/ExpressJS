import express from 'express';
import PutTestsDto from '../../Dto/Tests/PutTestsDto';

function putTestsCommand(request: express.Request, response: express.Response): void {
    const requestBody: PutTestsDto = request.body;

    console.log(request.params.id);
    console.log(requestBody);
}

export default putTestsCommand;