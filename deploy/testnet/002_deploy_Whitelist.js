const { ethers, upgrades } = require("hardhat");
module.exports = async ({
  getNamedAccounts,
  deployments
}) => {
  const {deploy, execute, get} = deployments;
  const {deployer} = await getNamedAccounts();

  let MockVerifierAddr = (await get("MockVerifier")).address;
  await deploy("Whitelist", {
    from: deployer,
    log: true,
    contract: "Whitelist",
    args: [
      MockVerifierAddr
    ],
    skipIfAlreadyDeployed: true,
  });
};

