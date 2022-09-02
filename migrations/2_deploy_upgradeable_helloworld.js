const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const HelloWorld = artifacts.require("HelloWorld");

module.exports = async function (deployer) {
  await deployProxy(HelloWorld, ["helloworld upgraded!!"], {
    deployer,
    initializer: "setMessage",
  });
};
