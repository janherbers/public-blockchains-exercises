// scripts/deploy.js

async function main() {
    const MyQuiz = await ethers.getContractFactory("MyQuiz");
    const myQuiz = await MyQuiz.deploy(
      ["Does Germany have 16 states?", "Is Bitcoin the same as Ethereum?", "True = True?", "False = False?", "True = False?"], // Initial questions
      [true, false, true, true, false] // Corresponding initial answers
    );
  
    //await myQuiz.deployed();
  
    console.log("MyQuiz deployed to:", myQuiz.target);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });