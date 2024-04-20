// routes/aggregatedDataRoutes.js
const express = require('express');
const router = express.Router();
const aggregatedDataController = require('../controllers/aggregatedDatacontroller');

router.post('/submit-to-hedera', aggregatedDataController.submitToHedera);

module.exports = router;