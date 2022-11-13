import express from 'express';

function getTestsRequest(request: express.Request, response: express.Response): void {
    console.log('getTestsRequest');
}

export default getTestsRequest;