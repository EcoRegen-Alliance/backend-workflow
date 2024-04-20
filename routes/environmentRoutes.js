const express = require('express');
const router = express.Router();
const { getNetZeroStatusFromUN } = require('../externalServices/UNDataService');

// Endpoint to fetch global net zero status from an external source like the UN
router.get('/global-net-zero-status', async (req, res) => {
    try {
        const netZeroStatus = await getNetZeroStatusFromUN();
        res.json({ netZero: netZeroStatus });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from the UN', details: error.message });
    }
});

module.exports = router;
