const mongoose = require('mongoose');
const { Schema } = mongoose;

const testsSchema = new Schema({
	message: String
});

module.exports = mongoose.model('Test', testsSchema);