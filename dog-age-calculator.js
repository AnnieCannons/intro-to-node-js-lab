let dogName = process.argv[2];


function calculateDogYears(humanYears) {
    let dogYears;

    if (humanYears === 1) {
        dogYears = 15
    }
    else if (humanYears === 2) {
        dogYears = 15 + 9
    }
    else {
        dogYears = 15 + 9 + (humanYears - 2) * 5
    }
    return dogYears
};


