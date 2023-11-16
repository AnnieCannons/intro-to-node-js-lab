function calculateDogAge(humanYears) {
    let dogYears;
  
    if (humanYears === 1) {
      dogYears = 15;
    } else if (humanYears === 2) {
      dogYears = 15 + 9;
    } else {
      dogYears = 15 + 9 + (humanYears - 2) * 5;
    }
  
    return dogYears;
  }
  
  function dogAgeSentence(name, humanYears) {
    let dogYears = calculateDogAge(humanYears);
    return `Your dog, ${name}, is ${humanYears} years old, but that's ${dogYears} years old in dog years!`;
  }
  

  let dogName = process.argv[2];
  let humanAge = parseInt(process.argv[3]);
  
  if (isNaN(humanAge) || humanAge < 1) {
    console.log("Please provide a valid age for your dog.");
  } else {
    console.log(dogAgeSentence(dogName, humanAge));
  }
