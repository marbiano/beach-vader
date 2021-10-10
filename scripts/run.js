// Require the Hardhat Runtime Environment explicitly. Optional
// but useful for running the script through `node <script>`.
const hre = require('hardhat');

async function main() {
  const [owner, ...accounts] = await hre.ethers.getSigners();
  const BeachVaderFactory = await hre.ethers.getContractFactory('BeachVader');
  const BeachVader = await BeachVaderFactory.deploy();
  await BeachVader.deployed();

  console.log('Contract deployed to:', BeachVader.address);
  console.log('Constract deployed by:', owner.address);

  const txn = await BeachVader.mintNFT();
  await txn.wait();

  const secondTxn = await BeachVader.connect(accounts[0]).mintNFT();
  await secondTxn.wait();
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
