const { upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const HelloWorld = artifacts.require("HelloWorld");
const HelloWorldV2 = artifacts.require("HelloWorldV2");

module.exports = async function (deployer) {
  const existingContract = await HelloWorld.deployed();
  await upgradeProxy(
    existingContract.address,
    HelloWorldV2,
    [existingContract.message],
    {
      deployer,
    }
  );
};
