import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { registerValidation, loginValidation } from '../validation/validation';
import User from '../models/user';

export const registerUser = async (req, res) => {

    // Validate user input
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    // Encrypt Password
    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(req.body.password, salt);

    // Create New User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPwd
    });

    try {
        const savedUser = await user.save();
        res.send({
            user: savedUser.id
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

export const loginUser = async (req, res) => {
    
    // Validate user input
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is not found');

    // Validate Input Password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Password is invalid');

    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
};