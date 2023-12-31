const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const FlashLoanArbitrage = await hre.ethers.getContractFactory('FlashLoanArbitrage');
  const flashLoanArbitrage = await FlashLoanArbitrage.deploy('0xC911B590248d127aD18546B186cC6B324e99F02c');
  await flashLoanArbitrage.deployed();
  console.log(`Flash Loan Arbitrage contract deployed: `, flashLoanArbitrage.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
