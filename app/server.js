import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const application = new app(false);
application.listen();