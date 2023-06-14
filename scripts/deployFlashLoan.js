const hre = require("hardhat");

async function main() {
  const FlashLoan = await hre.ethers.getContractFactory('FlashLoan');
  const flashLoan = await FlashLoan.deploy('0xC911B590248d127aD18546B186cC6B324e99F02c'); // AAVE V3 Goerli Specifc // https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses

  await flashLoan.deployed();
  console.log('Flash loan contract deployed: ', flashLoan.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
