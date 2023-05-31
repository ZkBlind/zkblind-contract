const { ethers, upgrades } = require("hardhat");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, execute, get } = deployments;
  const { deployer } = await getNamedAccounts();

  let VerifierAddr = (await get("Verifier")).address;
  await deploy("Whitelist", {
    from: deployer,
    log: true,
    contract: "Whitelist",
    args: [VerifierAddr],
    skipIfAlreadyDeployed: true,
  });
};
