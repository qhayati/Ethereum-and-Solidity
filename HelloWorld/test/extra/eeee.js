
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
//const web3  = new Web3(ganache.provider());
//const { interface , bytecode } = require('../compile');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of accounts
    accounts = await web3.eth.getAccounts();

    //Use one of those accounts to deploy The contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi There!'] })
        .send({ from: accounts[0], gas: '1000000' });

    inbox.setProvider(provider);
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        //console.log(inbox);
        assert.ok(inbox.options.address);
    });

    it('has a defulte message', async () => {
        const message = await inbox.methdes.message().call();
        assert.equal(message, 'Hi There!');
    });
}); 
