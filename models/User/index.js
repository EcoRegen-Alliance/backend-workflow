// models/User/index.js
const { findAllInvestors } = require('./investorModel');
const { findAllNodes } = require('./nodeModel');
const { findAllVerifiers } = require('./verifierModel');
const { findAllAdmins } = require('./adminModel');

const findAllUsers = () => {
    const investors = findAllInvestors();
    const nodes = findAllNodes();
    const verifiers = findAllVerifiers();
    const admins = findAllAdmins();

    return [...investors, ...nodes, ...verifiers, ...admins];
};

module.exports = {
    findAllUsers
};