// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Player {
    uint public unlockTime;
    address payable public owner;
    uint256 public score;

    function editScore(uint256 amount) public onlyOwner {
        score = amount;
    }

    function getScore() public view returns (uint256) {
        return score;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can execute this method.");
        _;
    }

    constructor() payable {
        owner = payable(msg.sender);
    }
}
