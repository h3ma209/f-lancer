const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const serviceController = require('../controllers/serviceController');
const jwt = require('jsonwebtoken');

// router.post("/signin", authController.postSignin);

// user routes
router.post("/login", authController.postLogin);
router.post('/user/create',authController.postRegister);
router.get("/user", isAuthenticated, authController.getUser);


// services routes
router.get('/services/search/all',serviceController.allServices);
// get back the current session user services
router.get('/services/search/user',serviceController.allServices);
router.delete('/services/delete/:id',serviceController.deleteServiceById);
router.post('/services/create',serviceController.createService);



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

