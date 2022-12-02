const dotenv = require('dotenv');
const request = require('supertest');
const { app, initializeMiddlewares, initializeControllers } = require('../../app.js');

describe('TestsController', () => {
    beforeAll(() => {
        // NOTE: initializing the environtment
        dotenv.config();
        
        // NOTE: get api/tests/1
        jest.mock('../../application/handlers/tests/requests/getTestsRequest.js', () => {
            return async () => {
                return {
                    "_id": "1",
                    "message": "test1",
                    "__v": 0
                }
            };
        });

        // NOTE: put api/tests/1
        jest.mock('../../application/handlers/tests/commands/putTestsCommand.js', () => {
            return async () => {};
        });

        // NOTE: delete api/tests/1
        jest.mock('../../application/handlers/tests/commands/deleteTestsCommand.js', () => {
            return async () => {};
        });

        // NOTE: post api/tests/1
        jest.mock('../../application/handlers/tests/commands/postTestsCommand.js', () => {
            return async () => '1';
        });

        // NOTE: get api/tests
        jest.mock('../../application/handlers/tests/requests/getAllTestsRequest.js', () => {
            return async () => {
                return [
                    {
                        "_id": "1",
                        "message": "test1",
                        "__v": 0
                    },
                    {
                        "_id": "2",
                        "message": "test2",
                        "__v": 0
                    },
                    {
                        "_id": "3",
                        "message": "test3",
                        "__v": 0 
                    }
                ]
            };
        });
        
        const getTestsRequest = require('../../application/handlers/tests/requests/getTestsRequest.js');
        const putTestsRequest = require('../../application/handlers/tests/commands/putTestsCommand.js');
        const deleteTestCommand = require('../../application/handlers/tests/commands/deleteTestsCommand.js');
        const postTestCommand = require('../../application/handlers/tests/commands/postTestsCommand.js');
        const getAllTestsRequest = require('../../application/handlers/tests/requests/getAllTestsRequest.js');

        // NOTE: initializing the application
        initializeMiddlewares(app);
        initializeControllers(app);
    });

    test('get api/tests/1', async () => {
        const response = await request(app).get('/api/tests/1');

        expect(response.statusCode).toStrictEqual(200);
        expect(response.header['content-type']).toStrictEqual('application/json; charset=utf-8');
        expect(response._body._id).toStrictEqual('1');
        expect(response._body.message).toStrictEqual('test1');
        expect(response._body.__v).toStrictEqual(0);
    });

    test('put api/tests/1', async () => {
        const response = await request(app).put('/api/tests/1');

        expect(response.statusCode).toStrictEqual(204);
    });

    test('delete api/tests/1', async () => {
        const reponse = await request(app).delete('/api/tests/1');

        expect(reponse.statusCode).toStrictEqual(204);
    });

    test('post api/tests', async () => {
        const response = await request(app).post('/api/tests');

        expect(response.statusCode).toStrictEqual(201);
        expect(response.text).toStrictEqual('1');
    });

    test('get api/tests', async () => {
        const response = await request(app).get('/api/tests');

        expect(response.statusCode).toStrictEqual(200);
        expect(response.header['content-type']).toStrictEqual('application/json; charset=utf-8');
        // NOTE: checking _id of objects
        expect(response._body[0]._id).toStrictEqual('1');
        expect(response._body[1]._id).toStrictEqual('2');
        expect(response._body[2]._id).toStrictEqual('3');
        // NOTE: checking message of objects
        expect(response._body[0].message).toStrictEqual('test1');
        expect(response._body[1].message).toStrictEqual('test2');
        expect(response._body[2].message).toStrictEqual('test3');
        // NOTE: checking __v of objects
        expect(response._body[0].__v).toStrictEqual(0);
        expect(response._body[1].__v).toStrictEqual(0);
        expect(response._body[2].__v).toStrictEqual(0);
    });
});