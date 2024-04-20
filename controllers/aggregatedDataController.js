// controllers/aggregatedDataController.js
const hederaUtils = require('../utils/hederaUtils');

exports.submitToHedera = async (req, res) => {
    try {
        const fileId = await hederaUtils.sendDataToHedera();
        res.json({ message: "Data successfully submitted to Hedera GMS.", fileId });
    } catch (error) {
        console.error('Failed to submit data to Hedera:', error);
        res.status(500).send('Error submitting data to Hedera.');
    }
};
