// models/investorModel.js
const db = require('../db/mockDatabase.json');

const findAllInvestors = () => {
    return db.investors || [];
};

const createInvestor = (investorData) => {
    if (!db.investors) {
        db.investors = [];
    }
    db.investors.push(investorData);
};

module.exports = {
    findAllInvestors,
    createInvestor
};
