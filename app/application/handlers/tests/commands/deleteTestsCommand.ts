import express from 'express';
import testsModel from '../../../../persistance/testsSchema';

function deleteTestCommand(request: express.Request, response: express.Response): void {
    const id: string = request.params.id;

    const result = testsModel.deleteOne({ 
        id: id
    }).catch(err => console.error(err));
}

export default deleteTestCommand;