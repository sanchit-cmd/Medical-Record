const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		imagePath: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

const Upload = mongoose.model('upload', uploadSchema);
module.exports = Upload;
