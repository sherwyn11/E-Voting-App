var Election = artifacts.require("../src/contracts/Election.sol");

module.exports = function(deployer) {
  deployer.deploy(Election);
};
