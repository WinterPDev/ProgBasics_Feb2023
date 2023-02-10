// Loops are an action we want to happen with an end condition, that will run that many times.


// for ()
// for (
//   var num = 0; // Where the loop begins. 
//   num <= 10;    // Where the loop ends. (When this resolves as false)
//   num += 2        // ++ (Increases the variable by 1) Steps the loop takes (how the start variable is changed, with each loop!)
//   ) {
//     console.log(num);

//     // At the end of our loop, the value of num is incremented by 1. (This is when the step occurs!)
//     // num is evaluated and checked by the condition we set. In this case, we check if num is greater than/equal to 5.

// }

// console.log(num); // 12?


// ++ 
// num++
// num--
// num = num + 1

// num -= 2
// num = num + 2



var num1 = 5;
var num2 = 10;

console.log(num2 % num1) // Remainder of 0  

var result = 13 % 2

console.log(result);


if (result % 2 == 0) {
    console.log('Result is an even number!')
} else {
    console.log('Result is not an even number!')
}


Math.round(5.9); // Output: 6 0 - 4 round down, 5+ round up.

Math.floor(5.9) // Output: 5 (Floor always rounds down!)

Math.ceil(5.1) // Output: 6 (Ceil always rounds up!)

Math.trunc(5.2) // Output: 5 

