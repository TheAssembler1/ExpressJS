import express from 'express';
import GetTestsDto from '../../../dto/tests/getTestsDto';
import testsModel from '../../../../persistance/testsSchema';

async function getTestsRequest(request: express.Request, response: express.Response): Promise<GetTestsDto> {
    const id: string = request.params.id;
    const result = await testsModel.findById(id);
    
    return result as GetTestsDto;
}

export default getTestsRequest;