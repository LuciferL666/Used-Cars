const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'c1b0f55c-8254-4a0b-8789-d780b25a060e';

const User = require('../models/User');

exports.register = (userData) => User.create(userData);

exports.login = async ({email, password}) => {
    const user = await User.findOne({ email });

    if(!user) {
        throw new Error('Invalid username or password');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error('Invalid username or password');
    }

    const payload = {
        _id: user._id,
        email: user.email,
    }

    const token = jwt.sign(payload, SECRET, {expiresIn: '2d' });
    
    return token;
};