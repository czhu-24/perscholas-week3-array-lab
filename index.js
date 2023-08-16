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

console.log(`FUNCTION ONE ${oddNumbers} is all odd numbers: ${checkForOddness(oddNumbers)}`);

// TODO for self-edification: replace for... of... with a .map or .filter or ??? similar function
// TODO: replace any even # w/ odd #

const checkForOddnessV2 = (array) => {
    // for each element in array, keep it if it's even & then add one to it
    array = array.map((x) => {
        if(x % 2 == 0){
            return x+1;
        }else{
            return x;
        }
    })
    return array;
}

console.log(`FUNCTION ONE VERSION TWO, ${oddNumbers} with all even numbers replaced with odd is: ${checkForOddnessV2(oddNumbers)}`);

const checkForOddnessV3 = (array) => {
    // write func that checks if arr is ONLY odd numbers

    // .every() is a function that returns true if the condition specified is true for all elements. otherwise, returns false

    // the Math.abs is for the cases where x is a negative number.
    return array.every((x) => Math.abs(x % 2) === 1);
}
console.log(`FUNCTION ONE VERSION THREE, ${oddNumbers} has all odd numbers: ${checkForOddnessV3(oddNumbers)}`);


// 2) write func that calcs avg temp of array. also find highest temp & log it
const fahrenheitTemps = [32, 50, 68, 86, 104, 122, 140, 158, 176, 194];
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
    console.log(`FUNCTION TWO The average temperature of ${fahrenheitTemps} is ${avgTemp} and the highest temperature is ${highestTemp}`);
}
findAvgAndHighestTemp(fahrenheitTemps);

// 3) write a func that searches this array for your favorite fruit. if array doesn't have fav fruit, add it

const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

const findFavoriteFruit = (array, favoriteFruit) => {
    // see if it includes
    let hasFavoriteFruit = false;
    for(item of array){
        if(item === favoriteFruit){
            hasFavoriteFruit = true;
        }
    }
    if(!hasFavoriteFruit){
        array.push(favoriteFruit);
    }
    return array;
}

console.log(`FUNCTION THREE The new array with my fav fruit is ${findFavoriteFruit(fruits, "Cantalope")}`);

// 4) write a function that will shorten each string to just its first 3 characters ("January" turns into "Jan")
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];
// using the .map() to output a new version of the argument array that has only the first 3 chars
const shortenMonths = (array) => {
    return array.map((x) => x.substring(0,3));
    // NOTE TO SELF: can't use splice. that's for ARRAYS not strings. herp derp.
    // also can't do string[0:3] <- doesn't work in js
    
    // kept the {} and the return for the outer arrow function because i think it's more readable...
}
console.log(`FUNCTION FOUR The shortened version of ${months} is \n ${shortenMonths(months)}`);

// 5) Make a new array called onlyStrings. Loop through mixed Data and push only things that are string data type to this new array. 
const mixedData = [42, 'hello', true, 3.14, 'world', false, null, undefined, 'goodbye', 7];

const pushOnlyStrings = (array) => {
    const onlyStrings = [];
    for(item of array){
        if(typeof item === "string"){
            onlyStrings.push(item);
        }
    }
    return onlyStrings;
}
// used JSON.stringify so that the template literal would display the falsy values of false, null, undefined correctly
// will probably use it from now on for arrays. it shows the brackets too.
// actually JSON.stringify converts its arguments to a JSON string
console.log(`FUNCTION FIVE If we push only the string types from ${JSON.stringify(mixedData)}, we get \n ${JSON.stringify(pushOnlyStrings(mixedData))}`);