import request from 'supertest';
import app from '../../app';
import dotenv from 'dotenv';

describe('TestsController', () => {
    test('get api/tests/', async () => {
        //NOTE: configurint environment and creating test
        dotenv.config();
        const application = new app(true);

        const response = await request(application.app).get('/api/tests/1');

        console.log(JSON.stringify(response));

        expect(response.statusCode).toBe(200);
    });
});