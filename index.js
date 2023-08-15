let oddNumbers = [1, 3, 5, 7, 9,  10, 11, 13, 15, 17, 19, 20];

// 1) write func that checks if array is ONLY odd numbers
const checkForOddness = (array) => {
    for(item of array){
        if(item % 2 == 0){
            return false;
        }
    }
    return true;
}

console.log(`${oddNumbers} is all odd numbers: ${checkForOddness(oddNumbers)}`);

// TODO for self-edification: replace for... of... with a .map or .filter or ??? similar function
// TODO: replace any even # w/ odd #

const fahrenheitTemps = [32, 50, 68, 86, 104, 122, 140, 158, 176, 194];
// 2) write func that calcs avg temp of array. also find highest temp & log it
const findAvgAndHighestTemp = (array) => {
    let avgTemp = 0;
    let highestTemp = 0;
    let runningSum = 0;
    for(item of array){
        runningSum += item;
        if(item >= highestTemp){
            highestTemp = item;
        }
    }
    avgTemp = runningSum / array.length;
    console.log(`The average temperature of ${fahrenheitTemps} is ${avgTemp} and the highest temperature is ${highestTemp}`);
}

findAvgAndHighestTemp(fahrenheitTemps);

// 3)

// 4)

// 5)