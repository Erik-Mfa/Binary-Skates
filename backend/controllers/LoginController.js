const userModel = require('../models/User');
const auth = require('../middlewares/auth/auth.js');
const bcryptjs = require('bcryptjs');

class LoginController {
    async login(req, res) {
        const { email, password } = req.body;
        const user = await userModel.findOne({ 'email': email }).select('+password');
        
        if (!user) {
            return res.status(400).send({ error: 'User not found!' });
        }

        if (!await bcryptjs.compare(password, user.password)) {
            return res.status(400).send({ error: 'Invalid password!' });
        }

        await auth.includeToken(user);
        res.status(200).json(user);
    }
}

module.exports = new LoginController();