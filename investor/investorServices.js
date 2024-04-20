const handleInvestmentRequest = (request) => {
    // Logic to process investment requests
    console.log("Processing investment request:", request);
};
const getInvestmentInterestRate = (ecos) => {
    // Determine interest rate based on ECOs
    if (ecos > 1000) return 3;
    if (ecos > 500) return 5;
    return 10;
};
module.exports = { handleInvestmentRequest, getInvestmentInterestRate };
