// routes/investorRoutes.js
const express = require('express');
const router = express.Router();
const investorController = require('../controllers/investorController');

// GET request to fetch all investors
router.get('/', investorController.listInvestors);

// POST request to add a new investor
router.post('/', investorController.addInvestor);

module.exports = router;
