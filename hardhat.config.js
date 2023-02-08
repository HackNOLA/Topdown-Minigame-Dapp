// import "@nomiclabs/hardhat-ethers";
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

//* Notes for deploying the smart contract on your own subnet
//* More info on subnets: https://docs.avax.network/subnets
//* Why deploy on a subnet: https://docs.avax.network/subnets/when-to-use-subnet-vs-c-chain
//* How to deploy on a subnet: https://docs.avax.network/subnets/create-a-local-subnet
//* Transactions on the C-Chain might take 2-10 seconds -> the ones on the subnet will be much faster
//* On C-Chain we're relaying on the Avax token to confirm transactions -> on the subnet we can create our own token
//* You are in complete control over the network and it's inner workings

module.exports = {
  etherscan: {
    /* Your API key for Snowtrace Testnet */
    url: "https://api.avax-test.network/ext/bc/C/rpc",
    apiKey: {
      /* Your API key for Snowtrace Testnet */
      avalancheFujiTestnet: "6TDQCDG9HU36GQ4THRJYG31THJWE3PTYFK",
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [
        "321d4bfd972baff2d03eac89039ca6d0df104da8d05b7b04b10cd5fd2f7447fb",
      ],
    },
  },
};
