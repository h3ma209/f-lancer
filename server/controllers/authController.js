const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

let loadedUser;

exports.postRegister = async (req, res, next) => {
    let { name, email, password, city, skills, imgLink } = req.body
    try {
        console.log(req.body);
        const existUserWithEmail = await userModel.findOne({ email: email })
        const existUserWithName = await userModel.findOne({ name: name })

        if (existUserWithEmail) {
            const error = new Error(
                'User with the same email already exist'
            );
            res.status(409).json({
                error: 'User with the same email already exist'
            })
            error.statusCode = 409
            throw error;
        }
        if (existUserWithName) {
            const error = new Error(
                'User with the same Username already exist'
            );
            res.status(409).json({
                error: 'User with the same Username already exist'
            })
            error.statusCode = 409
            throw error;
        }

        // console.log('-----------------------------------------')
        // console.log(password)
        // console.log('-----------------------------------------')
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = userModel({
            name: name,
            email: email,
            password: hashedPassword,
            city: city,
            skills: skills,
            imgLink: imgLink
        })
        let result = await user.save();

        // const token = jwt.sign({ email: email }, "expressnuxtsecret", {
        //     expiresIn: "20m",
        // });
        res.status(200).json({
            message: 'User created',
            // user: { _id: result._id, email: result.email,skills:result.skills,imgLink:result.imgLink,city:result.city },
            // token:token
        })

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.postLogin = async (req, res, next) => {
    let { email, password } = req.body;

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
        // it will expire token after 20 minutes and if the user then refresh the page will log out
        const token = jwt.sign({ email: loadedUser.email }, "expressnuxtsecret", {
            expiresIn: "20m",
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
            _id: loadedUser._id,
            name: loadedUser.name,
            email: loadedUser.email,
            skills: loadedUser.skills,
            imgLink: loadedUser.imgLink,
            city: loadedUser.city
        },

    });
};