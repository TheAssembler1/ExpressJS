const dotenv = require('dotenv');
const request = require('supertest');
const { app, listen, initializeMiddlewares, initializeControllers } = require('../../app.js');

describe('ExampleTest', () => {
    test('exampleTest', () => {
        expect(1).toBe(1);
    });
});

describe('TestsController', () => {
    beforeAll(() => {
        dotenv.config();
        
    });

    test('get api/tests', async () => {
        initializeMiddlewares(app);
        initializeControllers(app);

        jest.mock('../../application/handlers/tests/requests/getAllTestsRequest.js', () => {
            return async () => {
                return {
                    "_id": "1",
                    "message": "test1",
                    "__v": 0
                }
            };
        });
        
        const getAllTestsRequest = require('../../application/handlers/tests/requests/getAllTestsRequest.js');
        const response = await request(app).get('/api/tests');

        expect(response.statusCode).toBe(200);
        expect(response.header['content-type']).toBe('application/json; charset=utf-8');
        expect(JSON.parse(response.text)._id).toEqual('1');
        expect(JSON.parse(response.text).message).toEqual('test1');
        expect(JSON.parse(response.text).__v).toEqual(0);
    });
});