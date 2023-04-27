const { ethers, upgrades } = require("hardhat");
const fs = require("fs");
module.exports = async ({
  getNamedAccounts,
  deployments
}) => {
  const { all } = deployments;

  const allContracts = await all()
  console.table(
    Object.keys(allContracts).map((k) => [k, allContracts[k].address]),
  )
}
