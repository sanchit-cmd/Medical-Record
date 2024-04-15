const { Router } = require('express');
const multer = require('multer');
const path = require('path');

const Upload = require('../models/upload');

const router = Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(
			null,
			path.resolve(path.resolve(__dirname, '..'), '..') +
				'/frontend/public/uploads/'
		);
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	},
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), async (req, res) => {
	if (!req.user.id)
		return res.json({ status: 'error', message: 'No token Passed' });

	const { title, description } = req.body;
	const upload = await Upload.create({
		userId: req.user.id,
		title,
		description,
		imagePath: `uploads/${req.file.filename}`,
	});

	res.json({ upload });
});

router.get('/', async (req, res) => {
	try {
		const allUploads = await Upload.find({ userId: req.user.id });
		if (!allUploads)
			return res.json({ status: 'error', message: 'No Uploads' });

		return res.json({ data: allUploads });
	} catch (error) {
		console.log(error.message);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deletedRecord = await Upload.findByIdAndDelete(id);
		return res.json({ deletedRecord });
	} catch (error) {
		return res.json({ status: 'error', message: error.message });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const upload = await Upload.findById(id);
		return res.json({ upload });
	} catch (error) {
		return res.json({ status: 'error', message: error.message });
	}
});

module.exports = router;
