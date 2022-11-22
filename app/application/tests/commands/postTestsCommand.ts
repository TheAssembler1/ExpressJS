import express from 'express';
import PostTestsDto from '../../dto/tests/postTestsDto';
import testsModel from '../../../persistance/testsSchema';

function postTestCommand(request: express.Request, response: express.Response): string {
    const requestBody: PostTestsDto = request.body;
    const model = new testsModel(requestBody);
    const modelId = '';

    model.save(function (err) {
        (err) ? console.error(err) : console.log('NOTE: saved');
    });

    return model.id || '';
}

export default postTestCommand;