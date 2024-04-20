const express = require('express');
const schedule = require('node-schedule');
const nodeRoutes = require('./routes/nodeRoutes'); // Ensure the filename is correct
const verifierRoutes = require('./routes/verifierRoutes'); // Adding verifier routes
const investorRoutes = require('./routes/investorRoutes'); // Adding investor routes
const aggregatedDataRoutes = require('./routes/aggregatedDataRoutes');
const ecoCalculator = require('./ecoCalculation/ecoCalculator');
const { updateVecosAnnually } = require('./vecos/vecosService'); // Ensure this path is correct based on your project structure
const environmentRoutes = require('./routes/environmentRoutes'); // Import the environment routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());  // Using express.json() instead of bodyParser.json()

// Register routes
app.use('/nodes', nodeRoutes);  // Node-specific routes
app.use('/verifiers', verifierRoutes);  // Verifier-specific routes
app.use('/investors', investorRoutes);  // Investor-specific routes
app.use('/api', aggregatedDataRoutes);  // Aggregated data-specific routes under '/api'
app.use('/environment', environmentRoutes);  // Environment-specific routes

// Additional route to calculate ECOs
app.get('/calculate-ecos', (req, res) => {
    const totalCarbon = 1000; // Placeholder for total carbon sequestered
    const nodeData = [{ nodeId: 'node1', costPercentage: 20 }];
    const results = ecoCalculator.calculateEcos(nodeData, totalCarbon);
    res.json(results);
});

// Schedule the annual vecos update
schedule.scheduleJob('0 0 1 1 *', () => { // This cron expression schedules the job to run at midnight on January 1st every year
    console.log("Updating Vecos Annually...");
    updateVecosAnnually();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
