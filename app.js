const express = require('express');
const schedule = require('node-schedule');
const nodeRoutes = require('./routes/nodeRoutes');
const verifierRoutes = require('./routes/verifierRoutes');
const investorRoutes = require('./routes/investorRoutes');
const aggregatedDataRoutes = require('./routes/aggregatedDataRoutes');
const adminRoutes = require('./routes/adminRoutes'); // Import the admin routes
const ecoCalculator = require('./ecoCalculation/ecoCalculator');
const { updateVecosAnnually } = require('./vecos/vecosService');
const environmentRoutes = require('./routes/environmentRoutes');
const nodeRegistrationRoutes = require('./routes/nodeRegistrationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Register routes
app.use('/nodes', nodeRoutes);
app.use('/verifiers', verifierRoutes);
app.use('/investors', investorRoutes);
app.use('/api', aggregatedDataRoutes);
app.use('/admins', adminRoutes); // Use the admin routes
app.use('/environment', environmentRoutes);
app.use('/node-registration', nodeRegistrationRoutes);

// Additional route to calculate ECOs
app.get('/calculate-ecos', (req, res) => {
    const totalCarbon = 1000; // Placeholder for total carbon sequestered
    const nodeData = [{ nodeId: 'node1', costPercentage: 20 }];
    const results = ecoCalculator.calculateEcos(nodeData, totalCarbon);
    res.json(results);
});

// Schedule the annual vecos update
schedule.scheduleJob('0 0 1 1 *', () => {
    console.log("Updating Vecos Annually...");
    updateVecosAnnually();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});