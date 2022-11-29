import express from 'express';
import testsModel from '../../../../persistance/testsSchema.js';

async function getAllTestsRequest(request, response){
    const result = await testsModel.find();

    return result;
}

export default getAllTestsRequest;