pragma solidity ^0.5;



// pragma solidity ^0.5;
contract HelloWorld {
	string private message;
	constructor(string memory _value) public{
	    message = _value;
	}

	function setMessage(string memory _value) public{
		message = _value;
	}
	function viewMessage() public view returns(string memory){
		return message;
	}
}