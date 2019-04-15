const path = require('path');
const fs = require('fs');
const solc = require('solc');

const HelloWorldPath = path.resolve(__dirname, 'contracts', 'HelloWorld.sol');
const source = fs.readFileSync(HelloWorldPath, 'utf8');

//solc.compile(source, 1);
module.exports = solc.compile(source, 1).contracts[':HelloWorld'];
