const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment", async function () {
    const [owner] = await ethers.getSigners();

    console.log(owner.address);

    const Whitelist = await ethers.getContractFactory("Whitelist");

    const WhitelistContract = await Whitelist.deploy(owner.address);

    //const ownerBalance = await hardhatToken.balanceOf(owner.address);
    //expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
