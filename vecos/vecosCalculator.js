// vecosCalculator.js
const GOLDEN_RATIO = 1.618;

const calculateVecos = (ecos, year) => {
    return ecos / Math.pow(GOLDEN_RATIO, year - 1);
};

module.exports = { calculateVecos };
