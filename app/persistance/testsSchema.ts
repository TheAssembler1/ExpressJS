import mongoose from 'mongoose';
const { Schema } = mongoose;

const testsSchema = new Schema({
	message: String
});

const testsModel = mongoose.model('Test', testsSchema);

export default testsModel;