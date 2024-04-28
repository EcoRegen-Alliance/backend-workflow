// routes/adminRoutes.js
const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.get('/admins', adminController.listAdmins);
router.get('/nodes', adminController.listNodes);
router.post('/admins', adminController.addAdmin);

module.exports = router;