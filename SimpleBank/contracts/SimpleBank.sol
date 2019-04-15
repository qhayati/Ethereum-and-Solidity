pragma solidity ^0.5.1;

contract SimpleBank{
    mapping(address => uint256) accounts;

    event Deposit(address indexed from, uint value);
    event Withdraw(address indexed from, address indexed target, uint value);
    event Transfer(address indexed from,address indexed target, uint value);

    
    modifier senderHasAmount(uint256 amount){
        require(accounts[msg.sender] >= amount);
        _;
    }

    function deposit() public payable {
        accounts[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }
    
    function withdraw(address payable target, uint256 amount) senderHasAmount(amount) public {
        accounts[msg.sender] -= amount;
        target.transfer(amount);
        emit Withdraw(msg.sender, target, amount);
    }

    function transfer(address target, uint256 amount) senderHasAmount(amount) public {
        accounts[msg.sender] -= amount;
        accounts[target] += amount;
        emit Transfer(msg.sender, target, amount);
    }


    
    function balance() public view returns(uint256){
        return accounts[msg.sender];
    }
}