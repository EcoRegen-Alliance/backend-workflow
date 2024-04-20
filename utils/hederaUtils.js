// utils/hederaUtils.js
const fs = require('fs');
const path = require('path');
const { Client, FileCreateTransaction, FileContentsQuery, Hbar } = require("@hashgraph/sdk");

// Path to the aggregated data file
const SUMMARY_DB_PATH = path.join(__dirname, '..', 'db', 'mockSummaryDatabase.json');

// Function to load aggregated data
function loadAggregatedData() {
    const data = fs.readFileSync(SUMMARY_DB_PATH, 'utf8');
    return JSON.parse(data);
}

// Function to send data to Hedera GMS
async function sendDataToHedera() {
    const client = Client.forTestnet();
    client.setOperator(process.env.MY_ACCOUNT_ID, process.env.MY_PRIVATE_KEY);

    const aggregatedData = loadAggregatedData();

    // Example: Creating a file on Hedera network (this could be any Hedera transaction)
    const fileCreateTx = new FileCreateTransaction()
        .setContents(JSON.stringify(aggregatedData))
        .setKeys([client.operatorPublicKey])
        .setMaxTransactionFee(new Hbar(2));

    const submitTx = await fileCreateTx.execute(client);
    const receipt = await submitTx.getReceipt(client);
    console.log(`File created with ID: ${receipt.fileId}`);

    return receipt.fileId.toString();
}

module.exports = { sendDataToHedera };
