import express from 'express';
import testsModel from '../../../../persistance/testsSchema.js';


async function putTestsCommand(request, response){
    const id = request.params._id;
    const requestBody = request.body;

    await testsModel.findByIdAndUpdate(id, requestBody);
}

export default putTestsCommand;