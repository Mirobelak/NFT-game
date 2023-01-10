const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Spidy", "Hulk from AliExpress", "Granny"],       // Names
    ["https://imgur.com/gallery/0jzGO", // Images
    "https://imgur.com/gallery/tnB6sX5", 
    "https://imgur.com/gallery/YfMKB"],
    [200, 300, 100],                    // HP values
    [200, 150, 300],
    "Andy Tate", // Boss name
  "https://imgs.search.brave.com/AzcXqwsVHh3bvbPFiNuSxI-tjDzp31aPabG5_DmOiSY/rs:fit:1200:655:1/g:ce/aHR0cHM6Ly93d3cu/Z29hbGNhc3QuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA4L2FuZHJldy10/YXRlLXNtb2tpbmcu/anBn", // Boss image
  10000, // Boss hp
  50 // Boss attack damage                    // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done!");

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();