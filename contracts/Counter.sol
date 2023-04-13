// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.9;

contract Counter {

    uint public added;
    uint public subtracted;
    uint public multiplied;
    uint public divided;

    function addNum(uint a, uint b) external {
        added = a + b;
    }

    function subtractNum(uint a, uint b) external {
        subtracted = a - b;
    }

    function multiplyNum(uint a, uint b) external {
        multiplied = a * b;
    }

    function divideNum(uint a, uint b) external {
        require(b != 0, "cant divide by 0");
        divided = a / b;
    }

    function returnValues() external view returns(uint, uint, uint, uint) {
        return (added, subtracted, multiplied, divided);
    }
    
}
