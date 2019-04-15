var helloworldContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"aliasesReversed","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"aliases","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"bytes32"}],"name":"setAlias","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_value","type":"bool"}],"name":"setAuthorization","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]); 
var helloworld = helloworldContract.new(
   {

     from: web3.eth.accounts[0], 
     data: '0x70fa69a3beddb0aacf85745629fbc7eacf961d83', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') 
         console.log('Contract mined! address: ' + contract.address);
    }
 );





console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);


console.log('Contract mined! address: ' + contract.address);