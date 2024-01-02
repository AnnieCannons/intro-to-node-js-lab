if (process.argv.length !==4) {
    console.log("Usage:node dog-age-calculator.js[dogName][humanAge]");
} else {
    const dogName =process.argv[2];
    const humanAge = parseFloat(process.argv[3]);
}
let dogAge;
if (humanAge === 1) {
    dogAge = 15;   
}

else if (humanAge === 2) {

    dogAge = 15 + 9;

}  else {

dogAge = 15 + 9 + (humanAge -2) * 5;

}

console.log(
    `Your dog,${dogName}, is ${humanAge} years old,but that's ${dogAge} years old in humanAge`);


