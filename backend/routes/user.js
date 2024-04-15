const { Router } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const router = Router();

router.post('/register', async (req, res) => {
	try {
		const body = req.body;
		const newUser = {
			name: body.name,
			email: body.email,
			password: body.password,
		};

		const user = await User.create(newUser);
		return res.json({ user: user });
	} catch (error) {
		console.log(error.message);
		return res.json({ status: 'error', message: error.message });
	}
});

router.post('/login', async (req, res) => {
	try {
		const body = req.body;
		const user = await User.findOne({
			email: body.email,
			password: body.password,
		});

		if (!user)
			return res.json({
				status: 'error',
				message: 'Invalid Email or Password',
			});

		const token = jwt.sign(
			{
				id: user._id,
				name: user.name,
				email: user.email,
			},
			'secret123'
		);

		return res.json({ user: token });
	} catch (error) {
		console.log(error.message);
		return res.json({ status: 'error', message: error.message });
	}
});

module.exports = router;
