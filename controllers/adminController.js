// controllers/adminController.js
const Node = require('../models/User/nodeModel');
const Admin = require('../models/User/adminModel');

exports.listAdmins = (req, res) => {
    Admin.findAllAdmins(admins => {
        res.json(admins);
    });
};

exports.addAdmin = (req, res) => {
    Admin.createAdmin(req.body, newAdmin => {
        res.status(201).send(newAdmin);
    });
};

exports.listNodes = (req, res) => {
    Node.findAll(nodes => {
        res.send(nodes);
    });
};

exports.listNodesByDate = (req, res) => {
    Node.findAll(nodes => {
        const filteredNodes = nodes.filter(node => new Date(node.createdAt) >= new Date(req.query.date));
        res.send(filteredNodes);
    });
};

module.exports = {
    listAdmins,
    addAdmin,
    listNodes,
    listNodesByDate
};