import express from 'express';
import PostTestsDto from '../../dto/tests/postTestsDto';
import testsModel from '../../../persistance/testsSchema';

function postTestCommand(request: express.Request, response: express.Response): void {
    const requestBody: PostTestsDto = request.body;
    const model = new testsModel(requestBody);

    const err = model.save(function (err) {
        if (err){
            console.error(err);
        }

        console.log('was saved');
    });

    console.log(err);

    console.log(requestBody);
}

export default postTestCommand;