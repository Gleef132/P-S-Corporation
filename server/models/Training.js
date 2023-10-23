const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
	userName: { type: String, required: false },
	date: { type: String, required: false },
	comment: { type: String, required: false },
	path: { type: String, required: false },
})

const TrainingSchema = new Schema({
	title: { type: String, required: true },
	level: { type: String, required: true },
	amountExercise: { type: String, required: true },
	from: { type: String, required: true },
	description: { type: String, required: false },
	trainingMode: { type: String, required: true },
	reviews: { type: Number, required: false, default: 0 },
	date: { type: String, required: true },
	video: { type: String, required: true },
	path: { type: String, required: true },
	type: { type: String, required: false },
	gender: { type: String, required: false, default: 'Both' },
	comments: { type: [CommentSchema], requred: false, default: [] }
})



module.exports = model('Training', TrainingSchema)