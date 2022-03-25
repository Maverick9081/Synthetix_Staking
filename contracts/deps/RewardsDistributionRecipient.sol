pragma solidity ^0.8.0;

// Inheritance
import "./Owned.sol";

// https://docs.synthetix.io/contracts/source/contracts/rewardsdistributionrecipient
 contract RewardsDistributionRecipient is Owned {
    address public rewardsDistribution;
    
    constructor(address owner) Owned(owner){} 
    
    function notifyRewardAmount(uint256 reward) virtual external{
    }

    modifier onlyRewardsDistribution() {
        require(msg.sender == rewardsDistribution, "Caller is not RewardsDistribution contract");
        _;
    }

    function setRewardsDistribution(address _rewardsDistribution) external onlyOwner {
        rewardsDistribution = _rewardsDistribution;
    }
}