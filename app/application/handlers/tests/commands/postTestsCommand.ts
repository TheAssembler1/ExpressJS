import express from 'express';
import PostTestsDto from '../../../dto/tests/postTestsDto';
import testsModel from '../../../../persistance/testsSchema';

async function postTestCommand(request: express.Request, response: express.Response): Promise<string> {
    const requestBody: PostTestsDto = request.body;
    const model = new testsModel(requestBody);

    model.save(err => console.error(err));

    return model.id || '';
}

export default postTestCommand;