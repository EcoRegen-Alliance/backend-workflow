const calculateEcos = (nodeData, totalCarbon) => {
    return nodeData.map(node => ({
        nodeId: node.nodeId,
        ecos: (node.costPercentage / 100) * totalCarbon
    }));
};
module.exports = { calculateEcos };
