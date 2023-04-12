
const hre = require("hardhat");

async function main() {

  const Orange = await hre.ethers.getContractFactory("Orange");
  const orange = await Orange.deploy();

  await orange.deployed();

  console.log(`orange with deployed to ${orange.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
