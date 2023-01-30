require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
// require("@openzeppelin/hardhat-upgrades");
// require("hardhat-contract-sizer");
// require("solidity-coverage");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
    ],
  },
  // solidity: "0.5.0",

  networks: {
    goerli: {
      url: `${process.env.GOERLI_URL}`,
      accounts: [`${process.env.ACCOUNT1}`],
    },
    mainnet: {
      url: `${process.env.GOERLI_URL}`,
      accounts: [`${process.env.ACCOUNT1}`],
    },
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`,
  },
  mocha: {
    timeout: 1e14,
  },
};
