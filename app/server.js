const dotenv = require('dotenv');

//NOTE: need to initialize env first
dotenv.config();

console.log(`${process.env.API_URL}tests`);

const app = require('./app.js');

// NOTE: Iinitialize all modules in app and then listen on port
app.initializeApp(app.app);
app.listen(app.app);