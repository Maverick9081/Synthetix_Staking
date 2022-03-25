const { getAccount, getEnvVariable } = require("./helpers");

task("deploy_Reward_Distribution_contract").setAction(async function (taskArguements,hre) {
  const rewardDistributionContract = await hre.ethers.getContractFactory("RewardsDistribution", getAccount());
  const rewardDistribution = await rewardDistributionContract.deploy
        (getEnvVariable("ACCOUNT_ADDRESS"),
        getEnvVariable("AUTHORITY"),
        getEnvVariable("SYNTHETIX_PROXY"),
        getEnvVariable("REWARD_ESCROW"),
        getEnvVariable("FEE_POOL_PROXY"))
  console.log(`contract deployed at address: ${rewardDistribution.address}`);
});

task("deploy_Rewards_Distribution_Recipient").setAction(async function(taskArguements,hre) {
  const rewardDistributionRecipientContract = await hre.ethers.getContractFactory("RewardsDistributionRecipient",getAccount());
  const rewardDistributionRecipient = await rewardDistributionRecipientContract.deploy(getEnvVariable("ACCOUNT_ADDRESS"));
console.log(`contract deployed at address : ${rewardDistributionRecipient.address}`);
});


task("deploy_Staking_Rewards_contract").setAction(async function(taskArguements,hre) {
const stakingRewardsContract = await hre.ethers.getContractFactory("StakingRewards",getAccount());
const stakingRewards = await stakingRewardsContract
        .deploy(
          getEnvVariable("ACCOUNT_ADDRESS"),
          getEnvVariable("REWARD_DISTRIBUTION"),
          getEnvVariable("SNX_REWARD_TOKEN"),
          getEnvVariable("STAKING_TOKEN_ADDRESS"))
console.log(`contract deployed at address : ${stakingRewards.address}`);
});

task ("deploy_staking_token").setAction(async function(taskArguements,hre) {
  const stakingTokenContract = await hre.ethers.getContractFactory("NiceToken",getAccount());
  const stakingToken = await stakingTokenContract.deploy();
  console.log(`contract deployed at address : ${stakingToken.address}`);
});