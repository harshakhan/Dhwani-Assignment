const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { loginSchema, } = require('../validation');
dotenv.config();
const register = async (req, res) => {
    let err = await registerSchema.validate(req.body).catch((err) => {
        return err;
    });

    if (err.errors) {
        return res.status(400).send(err.errors[0]);
    }
    try{
        let {username, email, password } = req.body

        const usernameExist = await User.find({ username });
        const emailExist = await User.find({ email });
        if (usernameExist.length) {
            return res.status(400).send(`User with email id ${username} already exists`);
        }
        if (emailExist.length) {
            return res.status(400).send(`User with email id ${email} already exists`);
        }
        password = await bcrypt.hash(password, await bcrypt.genSalt(10));
        const user = new User({username, email, password})
        user
        .save()
        .then((e) => res.status(201).json({message: "Successfully user are added"}))
        .catch((err) => console.log(err))

        }
        catch(err){
            console.log(err)
        }
}

const login = async (req, res) => {
    let err = await loginSchema.validate(req.body).catch((err) => {
        return err;
    });

    if (err.errors) {
        return res.status(400).send(err.errors[0]);
    }
    try {
        const { username } = req.body;
        console.log("username", username)
        let user = await User.findOne({ username });
        console.log("user",user)
        if (!user) {
            return res.status(400).send('Username not found try again');
        }

        const { password } = user;
        console.log("password", password)
        const validPassword = await bcrypt.compare(req.body.password, password);
        console.log("body", req.body.password)
        console.log("validPassowrd", validPassword)
        if (!validPassword) {
            return res.status(400).send('Wrong Password');
        }

        const admin = { username };
        const accessToken = await jwt.sign(admin, process.env.SECRET_KEY, {expiresIn: '4000s'});
        return res.status(200).send({ success: true, status: 200, token: accessToken,  message: "Login Successful", timestamp: Date.now() });
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
};

const logout = (req, res) => {
    res.status(200).send({success: true, status: 200, message: "User Successfully Logged out"})
}



module.exports = { login, logout, register };