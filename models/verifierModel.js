// models/verifierModel.js
const db = require('../db/mockDatabase.json');

const findAllVerifiers = () => {
    return db.verifiers || [];
};

const createVerifier = (verifierData) => {
    if (!db.verifiers) {
        db.verifiers = [];
    }
    db.verifiers.push(verifierData);
};

module.exports = {
    findAllVerifiers,
    createVerifier
};
