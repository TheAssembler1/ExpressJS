import express from 'express';
import testsModel from '../../../../persistance/testsSchema.js';

async function postTestCommand(request, response){
    const requestBody = request.body;
    const model = new testsModel(requestBody);

    model.save(err => {
        if(err) console.error(err)
    });

    return model.id || '';
}

export default postTestCommand;