const axios = require('axios');

const getNetZeroStatusFromUN = async () => {
    try {
        const response = await axios.get('https://api.un.org/netzero/status');
        // Assume the response contains a field indicating whether net zero has been achieved globally
        return response.data.netZeroAchieved;  // Example: true/false
    } catch (error) {
        console.error('Error fetching net zero status from the UN:', error);
        throw error;
    }
};

module.exports = { getNetZeroStatusFromUN };
