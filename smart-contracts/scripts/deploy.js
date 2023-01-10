// const main = async () => {
//     const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
//     const gameContract = await gameContractFactory.deploy(
//       ["Spidy", "Hulk from AliExpress", "Granny"],       // Names
//       ["https://imgs.search.brave.com/0Eu0Jup9jBmzRuMNsfZGYwdzSWvfiuOeUYgVKyAxztA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/VmRmdXktSkdLeVhh/RkJlYWhsT25RSGFI/YSZwaWQ9QXBp", // Images
//       "https://imgs.search.brave.com/eZN9Y8SuQaK3ftPSzhtFFdbADF_2BvkJ6UU4MReyvjo/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9mbG93/ZW50bHkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAy/L015LXZvY2FidWxh/cnktd2FzLWxpa2Ut/dGhlLWh1bGtzLmpw/Zw", 
//       "https://imgs.search.brave.com/SD2tPyIszDpQXVi788TFmCQO-VNzP8jvcz09Nmaq9aA/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9tazBk/YXRpbmdyb29jb3Vo/M3E3ay5raW5zdGFj/ZG4uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAxL2dy/YW5ueS1raXNzLUN1/c3RvbS5qcGc"],
//       [200, 300, 100],                    // HP values
//       [200, 150, 300],
//       "Andy Tate", // Boss name
//     "https://imgs.search.brave.com/AzcXqwsVHh3bvbPFiNuSxI-tjDzp31aPabG5_DmOiSY/rs:fit:1200:655:1/g:ce/aHR0cHM6Ly93d3cu/Z29hbGNhc3QuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA4L2FuZHJldy10/YXRlLXNtb2tpbmcu/anBn", // Boss image
//     10000, // Boss hp
//     50 // Boss attack damage                    // Attack damage values
//     );
//     await gameContract.deployed();
//     console.log("Contract deployed to:", gameContract.address);
  
//     let txn;
//     txn = await gameContract.mintCharacterNFT(2);
//     await txn.wait();
    
//     txn = await gameContract.attackBoss();
//     await txn.wait();
    
//     txn = await gameContract.attackBoss();
//     await txn.wait();
  
//     console.log("Done!");
  
//   };
  
//   const runMain = async () => {
//     try {
//       await main();
//       process.exit(0);
//     } catch (error) {
//       console.log(error);
//       process.exit(1);
//     }
//   };
  
//   runMain();


  const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

    const gameContract = await gameContractFactory.deploy(                        
        ["Spidy", "Hulk from AliExpress", "Granny"],       
        ["https://imgs.search.brave.com/0Eu0Jup9jBmzRuMNsfZGYwdzSWvfiuOeUYgVKyAxztA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/VmRmdXktSkdLeVhh/RkJlYWhsT25RSGFI/YSZwaWQ9QXBp",
        "https://imgs.search.brave.com/eZN9Y8SuQaK3ftPSzhtFFdbADF_2BvkJ6UU4MReyvjo/rs:fit:1200:660:1/g:ce/aHR0cHM6Ly9mbG93/ZW50bHkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAy/L015LXZvY2FidWxh/cnktd2FzLWxpa2Ut/dGhlLWh1bGtzLmpw/Zw", 
        "https://imgs.search.brave.com/SD2tPyIszDpQXVi788TFmCQO-VNzP8jvcz09Nmaq9aA/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9tazBk/YXRpbmdyb29jb3Vo/M3E3ay5raW5zdGFj/ZG4uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAxL2dy/YW5ueS1raXNzLUN1/c3RvbS5qcGc"],
        [200, 300, 100],                   
        [200, 150, 300],
        "Andy Tate",
      "https://imgs.search.brave.com/AzcXqwsVHh3bvbPFiNuSxI-tjDzp31aPabG5_DmOiSY/rs:fit:1200:655:1/g:ce/aHR0cHM6Ly93d3cu/Z29hbGNhc3QuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA4L2FuZHJldy10/YXRlLXNtb2tpbmcu/anBn", 
      10000, 
      50 
    );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
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