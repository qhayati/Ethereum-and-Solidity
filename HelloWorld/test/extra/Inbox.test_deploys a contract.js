const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3  = new Web3(ganache.provider());

beforeEach (() => {

    web3.eth.getAccounts().then(fetchAccounts => {
        console.log(fetchAccounts);

    });

    describe('Inbox', () =>{
        it('deploys a contract', () => {});
    })

});





