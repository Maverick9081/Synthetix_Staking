pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

 

contract NiceToken is ERC20 {

    constructor() ERC20("NiceToken", "NTK") {
     _mint(msg.sender, totalSupply());
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    function totalSupply() public view virtual override returns (uint256) {
        
        return 100*10**6 *10**decimals();
    }

}