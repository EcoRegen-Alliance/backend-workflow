// models/User/adminModel.js
const db = require('../../db/mockDatabase.json');

const findAllAdmins = callback => {
    callback(db.admins || []);
};

const createAdmin = (adminData, callback) => {
    if (!db.admins) {
        db.admins = [];
    }
    db.admins.push(adminData);
    callback(adminData);
};

module.exports = {
    findAllAdmins,
    createAdmin
};