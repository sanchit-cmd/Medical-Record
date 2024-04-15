const { Router } = require('express');

const User = require('../models/user');
const Record = require('../models/record');

const { authentication } = require('../middleware/authentication');

const router = Router();

router.get('/', authentication, async (req, res) => {
	try {
		const userRecord = await Record.findOne({ userId: req.user.id });
		if (!userRecord || userRecord.status === 'no') {
			await Record.create({
				userId: req.user.id,
				age: 18,
				gender: 'male',
				medicalHistory: '',
				status: 'no',
			});

			return res.json({
				status: 'NULL',
				message: 'No record found for the user',
			});
		}

		return res.json({ userRecord });
	} catch (error) {
		return res.json({ status: 'error', message: error.message });
	}
});

router.put('/', authentication, async (req, res) => {
	try {
		const { age, gender, medicalHistory } = req.body;
		const newRecord = {
			age,
			gender,
			medicalHistory,
			status: 'yes',
		};

		const updatedRecord = await Record.findOneAndUpdate(
			{ userId: req.user.id },
			{ $set: newRecord }
		);

		return res.json({ record: updatedRecord });
	} catch (error) {
		return res.json({ status: 'error', message: error.message });
	}
});

module.exports = router;
