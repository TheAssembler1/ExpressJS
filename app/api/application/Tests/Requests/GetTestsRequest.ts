import express from 'express';
import GetTestsDto from '../../Dto/Tests/GetTestsDto';

function getTestsRequest(request: express.Request, response: express.Response): GetTestsDto {
    const res: GetTestsDto = {
        id: 1,
        message: "test1"
    };

    return res;
}

export default getTestsRequest;