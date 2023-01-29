// WEEK 3 || #1 //

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// WEEK 3 || #2 ODD OR EVEN

// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {
    if (num % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
};


// WEEK 3 || #3 -- LOG NUMS //

// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function(num) {
    for (let i = 1; i <=num; i++) {
        console.log(i)
    }
};


// WEEK 4 || #1 LOG EVEN NUMS //

// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num) {
    for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
            console.log(i)
        } else {
            console.log('This is not an even number')
        }
    }
};


// WEEK 4 || #2 COUNTDOWN

// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
    for (let i = num; i >= 1; i--) {
        console.log(i)
    }
};


// WEEK 4 || #3 - 

// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        sum += currentNumber;

    }
    return sum;
};



