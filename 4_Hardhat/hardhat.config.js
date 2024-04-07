require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

/** @type import('hardhat/config').HardhatUserConfig */
//console.log("METAMASK_1_PRIVATE_KEY:", process.env.METAMASK_1_PRIVATE_KEY);

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "custom",
  networks: {
    custom: {
      url: "http://134.155.50.136:8506",
      chainId: 1337,
      // accounts: [Buffer.from(process.env.METAMASK_1_PRIVATE_KEY, 'utf8').toString('hex')],
      // accounts: [process.env.METAMASK_1_PRIVATE_KEY],
      accounts: ["b48dd1e8092e96fa95c5bc08a9ff33998455292719dbc7defe20803209ce0668"]
      //gas: "auto",
      //gasPrice: "auto",
      //gasMultiplier: 1
    }
  }
};
