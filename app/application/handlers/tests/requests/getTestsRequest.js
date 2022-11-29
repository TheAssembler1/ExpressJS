import express from 'express';
import testsModel from '../../../../persistance/testsSchema.js';

async function getTestsRequest(request, response){
    const id = request.params.id;
    const result = await testsModel.findById(id);
    
    return result;
}

export default getTestsRequest;