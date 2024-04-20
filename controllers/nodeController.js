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
