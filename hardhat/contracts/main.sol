// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract LTYToken is ERC20 {
    address owner;
    // struct Buy {
    //     address buyer;
    //     uint itemId;
    // }
    // mapping(uint => uint) public itemPrices;
    // // mapping(bytes32 => Buy) public buyers;
    // uint counter = 0;
    
    constructor() ERC20("loyalty", "LTY") {
        owner = msg.sender;
    }
    // function addItem(uint itemPrice) public{
    //     itemPrices[counter] = itemPrice;
    //     counter++;
    // }
    function buying() public payable{
        if(msg.value  != 0){
            // buyers.push(Buy(msg.sender, itemPrices[itemId]));
            _mint(msg.sender, msg.value/100);
        }
        // emit(msg.sender,item);
    }


}