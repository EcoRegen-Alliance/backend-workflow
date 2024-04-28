Here's the updated readme.txt file with the new information and changes highlighted:

# EcoRegen Alliance Backend

This repository contains the backend code for the EcoRegen Alliance project, which aims to incentivize and manage carbon sequestration efforts through the cultivation of algae and other nature-based solutions. The backend is built using Node.js and interacts with the Hedera blockchain for token minting and management.

## Project Overview

The EcoRegen Alliance project consists of two main repositories:
1. [EcoRegen-Alliance-Backend](https://github.com/yourusername/EcoRegen-Alliance-Backend) (this repository): Handles the backend logic, data processing, and integration with the Hedera blockchain.
2. [DLT-Hackathon-Dashboard](https://github.com/EcoRegen-Alliance/DLT-Hackathon-Dashboard): Provides the REACT frontend UI dashboard for users to interact with the system.

The backend collects data from various nodes in an algae-based supply chain, including an algae farm, a pyrolyzing facility, and a local farmer. The collected data includes weight/mass balancing, CO2 emissions, energy consumption, temperature, ambient conditions, and financial information. This data is processed, anonymized, and aggregated before being sent to the Hedera blockchain via the Hedera Guardian Management System (GMS).

The system mints ECO tokens representing sequestered carbon and distributes them fractionally to the participating nodes based on their contribution. VECO tokens are also minted for verifiers and investors. The token distribution logic takes into account the global net zero status, prioritizing sequestration activities until net zero is achieved and gradually shifting towards mitigation activities post-net zero.

## Repository Structure

The repository has the following structure:

- `/controllers`: Contains controller files for handling HTTP requests and business logic.
  - `adminController.js`: Handles admin-related operations such as listing admins and nodes.
  - `aggregatedDataController.js`: Handles submission of aggregated data to Hedera GMS.
  - `investorController.js`: Manages investor-related operations.
  - `nodeController.js`: Handles node-related operations.
  - `verifierController.js`: Manages verifier-related operations.
- `/db`: Contains mock database files for development.
  - `mockDatabase.json`: Stores node-specific data.
  - `mockSummaryDatabase.json`: Stores aggregated data for Hedera GMS submission.
- `/ecoCalculation`: Contains logic for calculating ECO tokens.
  - `ecoCalculator.js`: Calculates ECO tokens based on carbon sequestration data.
- `/environmentalCalculations`: Contains environmental policy calculations.
  - `environmentalPolicy.js`: Implements dynamic token distribution based on net zero status.
- `/externalServices`: Contains services for fetching external data.
  - `unDataService.js`: Fetches global net zero status from the United Nations API.
- `/investor`: Contains logic for investor-related services.
  - `investorServices.js`: Handles investment requests and calculates interest rates.
- `/models`: Contains data models for interacting with the database.
  - `/User`: Contains user-related models.
    - `adminModel.js`: Handles admin data interactions.
    - `index.js`: Exports all user models.
    - `investorModel.js`: Handles investor data interactions.
    - `nodeModel.js`: Handles node data interactions.
    - `verifierModel.js`: Handles verifier data interactions.
- `/routes`: Contains route files for handling API endpoints.
  - `adminRoutes.js`: Defines routes for admin-related operations.
  - `aggregatedDataRoutes.js`: Defines routes for aggregated data operations.
  - `environmentRoutes.js`: Defines routes for fetching global net zero status.
  - `investorRoutes.js`: Defines routes for investor-specific operations.
  - `nodeRegistrationRoutes.js`: Defines routes for node registration.
  - `nodeRoutes.js`: Defines routes for node-specific operations.
  - `verifierRoutes.js`: Defines routes for verifier-specific operations.
- `/utils`: Contains utility files for various purposes.
  - `hederaUtils.js`: Provides utilities for interacting with the Hedera network.
- `/vecos`: Contains logic for calculating and managing VECO tokens.
  - `vecosCalculator.js`: Calculates VECO tokens based on ECO tokens and time.
  - `vecosService.js`: Updates VECO tokens annually.
- `/verifier`: Contains logic for verifier-related services.
  - `verifierService.js`: Handles data verification and verifier account totals.
- `app.js`: The main application file that configures the server and initializes the necessary components.

## Changes and Updates

- Added new routes in `routes/adminRoutes.js` for admin-related operations, such as listing admins and nodes.
- Introduced `routes/nodeRegistrationRoutes.js` for handling node registration routes.
- Restructured the `models` directory to have a `User` subdirectory containing user-related models:
  - Added `models/User/adminModel.js` for handling admin data interactions.
  - Added `models/User/index.js` to export all user models.
  - Moved `investorModel.js`, `nodeModel.js`, and `verifierModel.js` to the `User` subdirectory.
- Updated `controllers/adminController.js` to include functions for listing admins, adding admins, and listing nodes.
- Modified `controllers/nodeController.js` to include functions for registering nodes and submitting node data.
- Updated `db/mockDatabase.json` to include sample data for nodes and registrations.

## Logic Flow and Interactions

1. Data Collection:
   - Nodes (algae farm, pyrolyzing facility, local farmer) collect data on carbon sequestration, energy consumption, and other relevant metrics.
   - The collected data is sent to the backend via the respective node routes (`nodeRoutes.js`).
   - The `nodeController.js` handles the incoming data and interacts with the `nodeModel.js` to store the data in the database (`mockDatabase.json`).

2. Data Aggregation and Submission to Hedera:
   - The `aggregatedDataController.js` aggregates the data from various nodes and prepares it for submission to Hedera GMS.
   - The aggregated data is stored in `mockSummaryDatabase.json`.
   - The `hederaUtils.js` provides functions to interact with the Hedera network and submit the aggregated data.

3. ECO Token Calculation and Distribution:
   - The `ecoCalculator.js` calculates the ECO tokens based on the carbon sequestration data.
   - The calculated ECO tokens are distributed to the nodes based on their contribution percentages.

4. VECO Token Management:
   - The `vecosCalculator.js` calculates the VECO tokens based on the ECO tokens and time.
   - The `vecosService.js` updates the VECO tokens annually using a scheduled job.

5. Investor and Verifier Interactions:
   - Investors can interact with the system via the `investorRoutes.js` and `investorController.js` to view and manage their investments.
   - Verifiers can interact with the system via the `verifierRoutes.js` and `verifierController.js` to perform data verification and view their account totals.

6. Environmental Policy and Net Zero Status:
   - The `environmentalPolicy.js` implements the dynamic token distribution logic based on the global net zero status.
   - The `unDataService.js` fetches the global net zero status from the United Nations API.
   - The `environmentRoutes.js` provides an endpoint to fetch the global net zero status.

7. Admin Operations:
   - Admins can interact with the system via the `adminRoutes.js` and `adminController.js` to perform administrative tasks such as listing admins and nodes.

## Integration with Frontend Dashboard

To integrate the backend with the frontend dashboard repository ([DLT-Hackathon-Dashboard](https://github.com/EcoRegen-Alliance/DLT-Hackathon-Dashboard)), follow these steps:

1. Ensure that the backend server is running.
2. Update the API endpoints in the frontend code to match the backend routes.
3. Implement the necessary API calls in the frontend to fetch data from the backend and send data to the backend for processing.
4. Handle the API responses in the frontend and update the UI accordingly.

## Security Considerations

As the system involves tokenization and sensitive data, it is crucial to implement proper security measures:

- Use HTTPS to encrypt data in transit.
- Implement authentication and authorization mechanisms to protect sensitive endpoints.
- Validate and sanitize user inputs to prevent security vulnerabilities.
- Securely store and manage Hedera account credentials and other sensitive information.

## Future Enhancements

- Refine the code and add files to ensure seamless connectivity between the front end UI Dashboard repo and where necessary create a node operator folder with a nodeServices.js file to handle account data going back and forth for different node operators
- Integrate with actual data sources (e.g., Virtual Routez) and other third parties to which financial and climate data are sent instead of using mock data, with database files created or adapted accordingly in the db folder.
- Implement a robust error handling and logging mechanism.
- Enhance the token distribution logic based on real-world scenarios and requir.ements.
- Enable infinite length supply chains with each node providing data once a batch has been sequestered or an ECO creation triggered based on pre/post net zero critera being met
- Improve the scalability and performance of the system to handle large-scale data processing.

## Code Corrections and Improvements

1. In `app.js`, ensure that all required routes and utilities are properly imported, such as `investorRoutes`, `verifierRoutes`, and `environmentRoutes`.

2. In `nodeController.js`, update the code to include the token distribution logic based on the environmental policy. Integrate the `calculateTokenDistribution` function from `environmentalPolicy.js` to determine the token weights for each node type.

3. In `environmentRoutes.js`, ensure that the `getNetZeroStatusFromUN` function is correctly exported from `unDataService.js` and that the file path is correct.

4. In `investorServices.js`, handle potential errors and edge cases when processing investment requests and calculating interest rates.

5. In the `models` directory, ensure that the data interactions with the mock database files (`mockDatabase.json` and `mockSummaryDatabase.json`) are properly implemented and synchronized.

6. Review the code in all the files to ensure proper error handling, data validation, and adherence to best practices and coding standards.

Remember to test the entire system thoroughly, including the integration between the backend and frontend, to ensure smooth functionality and data flow.

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/EcoRegen-Alliance-Backend.git
   ```

2. Install the dependencies:
   ```
   cd EcoRegen-Alliance-Backend
   npm install
   ```

3. Configure the environment variables:
   - Create a `.env` file in the root directory.
   - Set the necessary environment variables (e.g., Hedera account credentials, API keys).

4. Start the server:
   ```
   npm start
   ```

5. The server will start running at `http://localhost:3000`.

## Contributing

Contributions to the project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Credits and Acknowledgements

We are grateful to Hedera, the Hashgraph Association, and our contributors for guiding us in developing this project.

## Contact Information

You can find out more about this project at [https://github.com/EcoRegen-Alliance](https://github.com/EcoRegen-Alliance) and also our website at [https://www.ecoregen.earth/](https://www.ecoregen.earth/) and sign up to stay in touch and be invited to join our teams.

## License

This project is licensed under the [MIT License](LICENSE).
