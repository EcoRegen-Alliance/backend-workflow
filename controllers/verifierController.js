// controllers/verifierController.js
const verifierModel = require('../models/User/verifierModel');

const listVerifiers = (req, res) => {
    res.json(verifierModel.findAllVerifiers());
};

const addVerifier = (req, res) => {
    verifierModel.createVerifier(req.body);
    res.status(201).send('Verifier added');
};

module.exports = {
    listVerifiers,
    addVerifier
};
