// Require the Hardhat Runtime Environment explicitly. Optional
// but useful for running the script through `node <script>`.
const hre = require('hardhat');

async function main() {
  const [owner] = await hre.ethers.getSigners();
  const balance = await owner.getBalance();

  console.log('Deploying contracts with account: ', owner.address);
  console.log('Account balance: ', balance.toString());

  const BeachVaderFactory = await hre.ethers.getContractFactory('BeachVader');
  const BeachVader = await BeachVaderFactory.deploy();
  await BeachVader.deployed();

  console.log('Contract deployed to:', BeachVader.address);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
