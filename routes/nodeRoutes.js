const express = require('express');
const router = express.Router();
const nodeController = require('../controllers/nodeController');

// GET request to fetch all nodes
router.get('/', nodeController.getAllNodes);

// POST request to add a new node
router.post('/', nodeController.addNode);

// POST request to register a node
router.post('/register', nodeController.registerNode);

// POST request to submit data from a node
router.post('/submitData', nodeController.submitNodeData);

module.exports = router;