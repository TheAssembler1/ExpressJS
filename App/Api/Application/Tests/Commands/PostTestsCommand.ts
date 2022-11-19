import express from 'express';
import PostTestsDto from '../../Dto/Tests/PostTestsDto';

function postTestCommand(request: express.Request, response: express.Response): void {
    const requestBody: PostTestsDto = request.body;

    console.log(requestBody);
}

export default postTestCommand;