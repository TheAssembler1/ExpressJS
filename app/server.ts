import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const application = new app(false);
application.listen();