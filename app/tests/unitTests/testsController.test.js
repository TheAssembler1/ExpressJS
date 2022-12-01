const dotenv = require('dotenv');
const request = require('supertest');
const { app, initializeMiddlewares, initializeControllers } = require('../../app.js');

describe('TestsController', () => {
    beforeAll(() => {
        // NOTE: initializing the environtment
        dotenv.config();
        
        jest.mock('../../application/handlers/tests/requests/getTestsRequest.js', () => {
            return async () => {
                return {
                    "_id": "1",
                    "message": "test1",
                    "__v": 0
                }
            };
        });
        
        const getTestsRequest = require('../../application/handlers/tests/requests/getTestsRequest.js');

        // NOTE: initializing the application
        initializeMiddlewares(app);
        initializeControllers(app);
    });

    test('get api/tests', async () => {
        const response = await request(app).get('/api/tests/1');

        expect(response.statusCode).toBe(200);
        expect(response.header['content-type']).toBe('application/json; charset=utf-8');
        expect(JSON.parse(response.text)._id).toEqual('1');
        expect(JSON.parse(response.text).message).toEqual('test1');
        expect(JSON.parse(response.text).__v).toEqual(0);
    });
});