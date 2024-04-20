// controllers/investorController.js
const investorModel = require('../models/investorModel');

const listInvestors = (req, res) => {
    res.json(investorModel.findAllInvestors());
};

const addInvestor = (req, res) => {
    investorModel.createInvestor(req.body);
    res.status(201).send('Investor added');
};

module.exports = {
    listInvestors,
    addInvestor
};
