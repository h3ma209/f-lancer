const express = require("express");
const router = express.Router();

const serviceController = require('../controllers/serviceController');
router.get('/all',serviceController.allServices);




module.exports = router;

