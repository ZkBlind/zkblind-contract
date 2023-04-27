const { ethers, upgrades } = require("hardhat");
module.exports = async ({
  getNamedAccounts,
  deployments
}) => {
  const {deploy, execute} = deployments;
  const {deployer} = await getNamedAccounts();
  
  console.log("Admin:", deployer);
  await deploy("MockVerifier", {
    from: deployer,
    log: true,
    contract: "MockVerifier",
    args: [],
    skipIfAlreadyDeployed: true,
  });

};

