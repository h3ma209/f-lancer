const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const serviceController = require('../controllers/serviceController');
const jwt = require('jsonwebtoken');

// router.post("/signin", authController.postSignin);
router.post("/login", authController.postLogin);
router.get("/user", isAuthenticated, authController.getUser);
router.get('/search/all',serviceController.allServices);



function isAuthenticated(req, res, next) {
    if (jwt.verify(req.headers.authorization.split(' ')[1], "expressnuxtsecret")) { 
        next()
    }
    else {
        res.status(401)
        next()
    }
}


module.exports = router;

