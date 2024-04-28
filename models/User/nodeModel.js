const db = require('../../db/mockDatabase.json');

const findAll = callback => {
    callback(db.nodes);
};

const create = (nodeData, callback) => {
    nodeData.createdAt = new Date();
    nodeData.tokensAccrued = 0;
    db.nodes.push(nodeData);
    callback(nodeData);
};

const submitData = (nodeData, callback) => {
    db.nodesData.push(nodeData);
    callback(null, nodeData);
};

module.exports = {
    findAll,
    create,
    submitData
};