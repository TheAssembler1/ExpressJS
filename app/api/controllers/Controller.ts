import express from 'express';

interface Controller{
    readonly path: string;
    readonly  router: express.Router;
}

export default Controller;