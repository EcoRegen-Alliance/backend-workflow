const Node = require('../models/nodeModel');

exports.getAllNodes = (req, res) => {
    Node.findAll(nodes => {
        res.send(nodes);
    });
};

exports.addNode = (req, res) => {
    Node.create(req.body, newNode => {
        res.status(201).send(newNode);
    });
};

exports.registerNode = (req, res) => {
    const nodeData = req.body;
    Node.create(nodeData, newNode => {
        res.status(201).send(newNode);
    });
};

exports.submitNodeData = (req, res) => {
    const nodeData = req.body;
    Node.submitData(nodeData, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

module.exports = {
    getAllNodes,
    addNode,
    registerNode,
    submitNodeData
};