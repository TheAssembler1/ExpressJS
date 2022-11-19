import express from 'express';
import GetTestsDto from '../../Dto/Tests/GetTestsDto';

function getTestsRequest(request: express.Request, response: express.Response): GetTestsDto {
    const res: GetTestsDto = {
        id: request.params.id,
        message: "test1"
    };

    return res;
}

export default getTestsRequest;