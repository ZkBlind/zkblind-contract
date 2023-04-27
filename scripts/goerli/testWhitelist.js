const {ethers} = require("hardhat");

async function main() {
  
    const [deployer] = await ethers.getSigners();
    const admin = deployer;
    console.log("deployer:", admin.address);

    let whitelistAddr = "0x3f815e7d299f08278c0308aE1048aa45ED12415f";
    const Whitelist = await ethers.getContractFactory("Whitelist");
    let whitelist = await Whitelist.attach(whitelistAddr);

    let whiteAddr = "0x7561f000988463f1E5419f8321222394984d24dB"
    let vRes = await whitelist.verifyUser(whiteAddr);
    console.log("Verify res: ", vRes.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });