import express from 'express';
import PostTestsDto from '../../dto/tests/postTestsDto';

function postTestCommand(request: express.Request, response: express.Response): void {
    const requestBody: PostTestsDto = request.body;

    console.log(requestBody);
}

export default postTestCommand;