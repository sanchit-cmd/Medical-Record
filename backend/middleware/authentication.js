const jwt = require('jsonwebtoken');

const User = require('../models/user');

async function authentication(req, res, next) {
	try {
		const token = req.headers['x-access-token'];
		if (!token)
			return res.json({ status: 'error', message: 'Invalid Token' });

		const decoded = jwt.verify(token, 'secret123');
		const user = await User.findById(decoded.id);

		if (!user)
			return res.json({ status: 'error', message: 'No User Found' });

		req.user = user;
		return next();
	} catch (error) {
		console.log(error);
		return next();
	}
}

module.exports = { authentication };
