const path = require('path');
const fs = require('fs');
const solc = require('solc');

const SimpleBankPath = path.resolve(__dirname, 'contracts', 'SimpleBank.sol');
const source = fs.readFileSync(SimpleBankPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':SimpleBank'];