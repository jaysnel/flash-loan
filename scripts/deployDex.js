const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const alchemy = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_URL_ENDPOINT)

  const Dex = await hre.ethers.getContractFactory('Dex');
  const dex = await Dex.deploy();
  await dex.deployed();
  console.log(`Dex contract deployed: `, dex.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
