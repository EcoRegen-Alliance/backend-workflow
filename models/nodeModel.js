const db = require('../db/mockDatabase.json');  // Link to your mock database

const findAll = callback => {
    callback(db.nodes);
};

const create = (nodeData, callback) => {
    db.nodes.push(nodeData);  // Adds the new node data to the array
    callback(nodeData);
};

module.exports = {
    findAll,
    create
};
