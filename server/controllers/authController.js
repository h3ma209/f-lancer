const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

let loadedUser;
exports.postLogin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email: email });

        if (!user) {
            // console.log(userModel.find())
            const error = new Error("user with this email not found!");
            error.statusCode = 401;
            throw error;
        }
        loadedUser = user;
        // console.log(user)
        const comparePassword = await bcrypt.compare(password, user.password);
        // console.log('---------------------------------------')
        // console.log(password)
        // console.log(user.password)
        // console.log(comparePassword)
        // console.log('---------------------------------------')
        if (!comparePassword) {

            const error = new Error("password is not match!");
            error.statusCode = 401;
            throw error;
        }
        const token = jwt.sign({ email: loadedUser.email }, "expressnuxtsecret", {
            expiresIn: "20m", // it will expire token after 20 minutes and if the user then refresh the page will log out
        });
        res.status(200).json({ token: token });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getUser = (req, res) => {
    res.status(200).json({
        user: {
            id: loadedUser._id,
            name: loadedUser.name,
            email: loadedUser.email,
        },
    });
};