import express from 'express';
import testsModel from '../../../../persistance/testsSchema';

async function deleteTestCommand(request: express.Request, response: express.Response): Promise<void> {
    const id: string = request.params.id;

    testsModel.deleteOne({ id: id }).catch(err => console.error(err));
}

export default deleteTestCommand;