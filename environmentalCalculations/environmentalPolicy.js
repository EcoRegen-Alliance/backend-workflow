// environmentalCalculations/environmentalPolicy.js
const currentYear = new Date().getFullYear();
const netZeroAchievedYear = 2025; // This should be dynamically retrieved or set when net zero is achieved

const calculateTokenDistribution = (year) => {
    const yearsSinceNetZero = year - netZeroAchievedYear;
    let sequestrationWeight = 1;
    let mitigationWeight = 0;

    if (yearsSinceNetZero >= 0) {
        // Gradually adjust weights over 30 years
        mitigationWeight = Math.min(1, yearsSinceNetZero / 30);
        sequestrationWeight = 1 - mitigationWeight;
    }

    return { sequestrationWeight, mitigationWeight };
};

module.exports = { calculateTokenDistribution };
