import express from 'express';

function postTestCommand(request: express.Request, response: express.Response): void {
    console.log('postTestCommand');
}

export default postTestCommand;