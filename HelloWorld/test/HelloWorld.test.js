const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
 
// UPDATE THESE TWO LINES RIGHT HERE!!!!! <-----------------
const provider = ganache.provider();
const web3 = new Web3(provider);
 
const { interface, bytecode } = require('../compile');
 
let accounts;
let HelloWorld;
 
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  HelloWorld = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });

});
    

 
describe('HelloWorld Contract', () => {
  it('deploys a contract', () => {
    assert.ok(HelloWorld.options.address);
  });

   it('it has set a message', async () => {
    await HelloWorld.methods.setMessage('Hi There .....!!!').send({ from: accounts[0] });
    const message = await HelloWorld.methods.message().call();
    const message = await inbox.methods.message().call(); 
    assert.equal(message, 'Hi There .....!!!');
  });

});