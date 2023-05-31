require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-deploy");
require("hardhat-contract-sizer");
const dotenv = require("dotenv");
dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      timeout: 200000000,
      gasPrice: 5100000000,
      gas: 5100000,
    },
    goerli: {
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 5,
      gas: 5000000,
      gasPrice: 35000000600,
      accounts: {
        mnemonic: process.env.MNEMONIC_TEST_ACCOUNT,
      },
      deploy: ["./deploy/testnet/"],
    },
    mantletest: {
      url: "https://rpc.testnet.mantle.xyz",
      chainId: 5001,
      gas: 5000000,
      gasPrice: 1,
      accounts: {
        mnemonic: process.env.MNEMONIC_TEST_ACCOUNT,
      },
      deploy: ["./deploy/testnet/"],
    },
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      chainId: 80001,
      accounts: [process.env.PK_TEST_ACCOUNT],
    },
    hardhat: {
      accounts: { private_key: process.env.PK_TEST_ACCOUNT },
    },
  },
  namedAccounts: {
    deployer: {
      5: 0,
      5001: 0,
      80001: 0,
      31337: 0,
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    // only: [':ERC20$'],
  },
};
