// routes/nodeRoutes.js
const express = require('express');
const router = express.Router();
const nodeController = require('../controllers/nodeController');

// GET request to fetch all nodes
router.get('/', nodeController.getAllNodes);

// POST request to add a new node
router.post('/', nodeController.addNode);

module.exports = router;
