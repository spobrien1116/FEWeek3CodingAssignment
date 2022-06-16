// Start of coding assignment

// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array
// (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
// Print the result to the console. 
console.log(ages[ages.length - 1] - ages[ages.length - ages.length]);

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths). 
ages.push(34);
console.log(ages[ages.length - 1] - ages[ages.length - ages.length]);

// 1c. Use a loop to iterate through the array and calculate the average age. Print the result to the console. 
var totalOfAges = 0;
for (var i = 0; i < ages.length; i++) {
    totalOfAges += ages[i];
}
console.log(totalOfAges / ages.length);

// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console. 
var letterTotal = 0;
for (var i = 0; i < names.length; i++) {
    letterTotal += names[i].length;
}
console.log(letterTotal / names.length);

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces,
// and print the result to the console. 
var allNames = "";
for (var i = 0; i < names.length; i++) {
    allNames += names[i] + " ";
}
console.log(allNames);

// 3. How do you access the last element of any array?
// Answer: Assuming the name of the array was myArray: 
// myArray[myArray.length - 1]; 

// 4. How do you access the first element of any array?
// Answer: Assuming the name of the array was myArray: 
// myArray[0]; 

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length 
// of each name to the nameLengths array. For example:
// namesArray = ["Kelly", "Sam", "Kate"] //given this array 
// nameLengths = [5, 3, 4] //create this new array
var nameLengths = [];
for (var i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
// Print the result to the console. 
var nameLengthsSum = 0;
for (var i = 0; i < nameLengths.length; i++) {
    nameLengthsSum += nameLengths[i];
}
console.log(nameLengthsSum);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself 
// n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function wordConcatNTimes (word, n) {
    var wordConcatenated = "";
    for (var i = 0; i < n; i++) {
        wordConcatenated += word;
    }
    return wordConcatenated;
}
console.log(wordConcatNTimes("Hello!", 7));

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name 
// (the full name should be the first and the last name separated by a space).
function createFullName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return fullName;
}
console.log(createFullName("Shawn", "O'Brien"));

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function calculateGreaterThan100(array) {
    var arraySum = 0;
    for (var i = 0; i < array.length; i++) {
        arraySum += array[i];
    }
    return arraySum > 100;
}

var greaterThan100Array = [33, 34, 35];
var lessThan100Array = [1, 2, 3, 4, 20, 53];
console.log(calculateGreaterThan100(greaterThan100Array));
console.log(calculateGreaterThan100(lessThan100Array));

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averageTheArray(array) {
    var arrayTotal = 0;
    for (var i = 0; i < array.length; i++) {
        arrayTotal += array[i];
    }
    var arrayAverage = arrayTotal / array.length;
    return arrayAverage;
}
console.log(averageTheArray(greaterThan100Array));
console.log(averageTheArray(lessThan100Array));

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the 
// first array is greater than the average of the elements in the second array.
function compareAveragesOfTwoArrays(array1, array2) {
    var array1Total = 0;
    var array2Total = 0;

    for (var i = 0; i < array1.length; i++) {
        array1Total += array1[i];
    }
    var array1Average = array1Total / array1.length;

    for (var i = 0; i < array2.length; i++) {
        array2Total += array2[i];
    }
    var array2Average = array2Total / array2.length;

    return array1Average > array2Average;
}

console.log(compareAveragesOfTwoArrays(greaterThan100Array, lessThan100Array));
console.log(compareAveragesOfTwoArrays(lessThan100Array, greaterThan100Array));

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 10.51));
console.log(willBuyDrink(true, 10.50));
console.log(willBuyDrink(false, 10.51));
console.log(willBuyDrink(false, 10.50));

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it. 

// I have created a function that determines if I should go to sleep or not.
// It will take in an answer to a prompt question "Are you tired?"
// If the answer is yes, it will say "Go to sleep!"
// If the answer is no, it  will say "Carry on."
// If the answer is anything else, it will say "Acceptable answers were yes or no. Maybe you need sleep."
function checkIfTired(questionAnswer) {
    if (questionAnswer === "yes") {
        console.log("Go to sleep!");
    } else if (questionAnswer === "no") {
        console.log("Carry on.");
    } else {
        console.log("Acceptable answers were yes or no. Maybe you need sleep.");
    }
}
var isTired = prompt("Are you tired? (Answer 'yes' or 'no')");
console.log("You answered " + isTired + ".");
checkIfTired(isTired);
// I created this function to answer the question in a way that gave me practice on using prompts.