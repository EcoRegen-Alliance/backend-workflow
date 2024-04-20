// vecosService.js
const { calculateVecos } = require('./vecosCalculator');
const db = require('../db/mockDatabase.json'); // Assuming this contains relevant ECO and vecos data

const updateVecosAnnually = () => {
    const currentYear = new Date().getFullYear();
    const mintingYear = db.mintingStartYear; // Assuming this is stored
    const ecos = db.totalECOs; // Total ECOs stored in the database

    const vecos = calculateVecos(ecos, currentYear - mintingYear + 1);
    db.totalVecos = vecos; // Update the database with new vecos total
    // Save changes to the database here
};

module.exports = { updateVecosAnnually };
