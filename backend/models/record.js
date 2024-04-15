const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		medicalHistory: {
			type: String,
		},
		status: {
			type: String,
			default: 'no',
		},
	},
	{ timestamps: true }
);

const Record = mongoose.model('record', recordSchema);
module.exports = Record;
