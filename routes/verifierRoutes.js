// routes/verifierRoutes.js
const express = require('express');
const router = express.Router();
const verifierController = require('../controllers/verifierController');

// GET request to fetch all verifiers
router.get('/', verifierController.listVerifiers);

// POST request to add a new verifier
router.post('/', verifierController.addVerifier);

module.exports = router;
