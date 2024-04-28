const express = require('express');
const nodeController = require('../controllers/nodeController');

const router = express.Router();

router.post('/register', nodeController.registerNode);

module.exports = router;