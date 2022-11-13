import express from 'express';
import Controller from './Controller';
import getTestsRequest from '../Application/Tests/Requests/GetTestsRequest';
import putTestsCommand from '../Application/Tests/Commands/PutTestsCommand';
import postTestCommand from '../Application/Tests/Commands/PostTestsCommand';
import GetTestsDto from '../Application/Dto/Tests/GetTestsDto';

class TestsController implements Controller {
    public path = `${process.env.API_URL}tests`;
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    private intializeRoutes(): void {
        this.router.get(this.path, this.getTest);
        this.router.put(this.path, this.putTest);
        this.router.post(this.path, this.postTest);
    }

    /**
     * @swagger
     * {
     *   "components": {
     *      "schemas": {
     *          "GetTestsDto": {
     *          },
     *      },
     *   }
     */

    /**
     * @swagger
     * {
     *   "/pets": {
     *      "get": {
     *          "description": "Returns all pets from the system that the user has access to",
     *          "produces": [
     *              "application/json"
     *          ],
     *          "responses": {
     *              "200": {
     *                  "description": "A list of pets.",
     *                  "schema": {
     *                  "type": "array",
     *                  "items": {
     *                  "$ref": "#/definitions/pet"
     *              }
     *           }
     *           }
     *       }
     *       }
     *   }
     *   }
     */
    private getTest(request: express.Request, response: express.Response): void {
        const res: GetTestsDto = getTestsRequest(request, response);
        response.status(200).send(res);
    }

    private putTest(request: express.Request, response: express.Response): void {
        putTestsCommand(request, response);
        response.status(200).send();
    }

    private postTest(request: express.Request, response: express.Response): void {
        postTestCommand(request, response);
        response.status(200).send();
    }
}

export default TestsController;