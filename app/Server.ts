import dotenv from 'dotenv';
import App from './app';
import app from './app';

dotenv.config();

const application = new app(false);
application.listen();