// This is a sigle line comment
/*
this is a multiline comment
Here is another comment
*/

// Variable declarations

// var initialVariable
// var myVariable = 10
// let myVariableName = "hello"
// const variable = 12

// myVariable = 15
// myVariableName = "Good morning"
// // variable = 34   can't work since a value can't be assigned to a constant variable

// console.log(typeof(initialVariable));
// console.log(typeof(myVariable));
// console.log(myVariable);
// console.log(myVariableName);
// console.log(variable);

// ************* Operators in Javascript
// *** Addition, subtraction, multiplication, division, and modulo

// var a = 2, b = 10

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

/* *********** increment and decrement ************ */
// let temp1 = 0
// let temp2 = 0
// var increment = 3, decrement = 12;
// console.log(increment, decrement);
// 
// increment = increment + 1;
// increment++;
// increment+=1;
// 
// temp1  = ++increment;
// temp2 = increment++;
// console.log(temp2);
// 
// decrement = decrement - 1;
// decrement--;
// decrement-=1;
// console.log(increment, decrement);

/** Working on strings */

// var initialVariable = "Mr Nde said 'Hello to you guys'"
// initialVariable = `Mr Nde said "I'm a plug"`
// initialVariable = `Mr Nde said \\ I'm a plug`
// initialVariable = "Hello " + "world"
// 
// console.log(initialVariable);
// 
// var string = "Hello world"
// // string[2] = "d"  strings are unmutable
// 
// // console.log(string[2]);
// console.log(string.length);

/** Working on Arrays */

// var variable = 10;
// var myArr = [23, 45, "hello", null, true, variable];
// var last = myArr.pop();
// 
// console.log(myArr);
// 
// myArr[2] = "world";
// myArr.pop();
// myArr.push("hello");
// myArr.shift();
// myArr.unshift("bonjour");
// 
// myArr.map((i, j)=>{
//     // console.log(i);
//     // console.log("index: " + j + ", value: " + i);
//     console.log(`index: ${j}, value: ${i}`);
// });

// console.log(myArr.some((i)=>(i=true)));


// console.log(myArr[5][1]);
// console.log(myArr[6]);
// console.log(myArr);
// console.log(last);

/** Working with fuction */

// The common way of declaring a function

// function addTwoNumbers(a, b) {
//     return a + b;
// }

// console.log(addTwoNumbers(2, 5));

// function sumOfNumbers(...number){
//     let sum = 0;
//     number.forEach((a) => {
//         sum += a;
//     });

//     return sum;
// }

// console.log(sumOfNumbers(2, 5, 4, 8, 3));

// Using ES6 syntax

// const subtractTwoNumbers (a, b) => {
//     return a - b;
// };

// console.log(subtractTwoNumbers(7, 3));

// function numberOfPears(arr){

//     let count = []
//     arr.forEach((a) => {
//         let num = 0;
//         if (a){
//             num++;
//         }
//     });

//     return sum;
// }

// console.log(sumOfNumbers[2, 5, 4, 8, 3]);

// function countPairs(numbers) {
//     let pairs = 0;
//     let counts = [];
//     for (let i =  0; i < numbers.length; i++){
//         numbers.map((num) => {
//             if (numbers[0] === num) {
//                 counts.push(num);
//             }
//         });

//         pairs += Math.floor(counts.length / 2);
//         counts = [];
//         // Creating a new array that doesn't contain the zeroth element
//         numbers = numbers.filter((num) => num !== numbers[0]);
//     }
//     return pairs;
// }

// console.log(countPairs([1, 6, 5, 8, 5, 5, 5]));

