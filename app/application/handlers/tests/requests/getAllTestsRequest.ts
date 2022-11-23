import express from 'express';
import GetTestsDto from '../../../dto/tests/getTestsDto';
import testsModel from '../../../../persistance/testsSchema';

async function getAllTestsRequest(request: express.Request, response: express.Response): Promise<GetTestsDto[]> {
    const result = await testsModel.find();
    
    return result as GetTestsDto[];
}

export default getAllTestsRequest;