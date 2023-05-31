const { ethers, upgrades } = require("hardhat");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, execute, get } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("Verifier", {
    from: deployer,
    log: true,
    contract: "Verifier",
    args: [],
    skipIfAlreadyDeployed: true,
  });
};
