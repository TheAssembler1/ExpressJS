import express from 'express';
import testsModel from '../../../../persistance/testsSchema.js';

async function deleteTestCommand(request, response){
    const id = request.params.id;

    testsModel.deleteOne({ id: id }).catch(err => {
        if(err) console.error(err)
    });
}

export default deleteTestCommand;