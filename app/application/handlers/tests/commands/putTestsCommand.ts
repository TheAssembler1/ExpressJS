import express from 'express';
import PutTestsDto from '../../../dto/tests/putTestsDto';
import testsModel from '../../../../persistance/testsSchema';


async function putTestsCommand(request: express.Request, response: express.Response): Promise<void> {
    const id: string = request.params._id;
    const requestBody: PutTestsDto = request.body;

    await testsModel.findByIdAndUpdate(id, requestBody);
}

export default putTestsCommand;