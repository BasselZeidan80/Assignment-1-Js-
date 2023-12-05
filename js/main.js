/* 
question one
Write a program that allow to user enter number then printit
*/

// var userNumber = window.prompt("Enter number");

// document.getElementById("numInput").innerHTML = userNumber;

// -----------------------------------------------------------------------------

/* 
question two
Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no
*/
// var userInput = window.prompt("enter number");

// if (userInput % 3 == 0 && userInput % 4 == 0) {
//   document.getElementById("numInput").innerHTML = "yes";
// } else {
//   document.getElementById("numInput").innerHTML = "no";
// }

// ---------------------------------------------------------------

/* 
question 3
Write a program that allows the user to insert 2 integers then print the max

*/

// var num1 = Number(window.prompt("enter first num"));
// var num2 = Number(window.prompt("enter seccond num"));
// var maxValue = null;

// if (num1 > num2) {
//   maxValue = num1;
// } else {
//   maxValue = num2;
// }
// document.getElementById("numInput").innerHTML = "maxValue is " + maxValue;

// ---------------------------------------------------------------------------------------------

/* 
Question 4
Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.
*/

// *********solution one**********
// var input = Number(window.prompt("enter num"));
// console.log(input == `-${-input}`);
// if (input == `-${-input}`) {
//   console.log("negative");
// } else {
//   console.log("positive");
// }

// ***** Solution 2 ******
// var input = Number(window.prompt("enter num"));
// if (input < 0) {
//   console.log("negative");
// } else {
//   console.log("positive");
// }
// -----------------------------------------------------------------------------

/* 
Question 5

Write a program that take 3 integers from user then print the max element
and the min element.
*/

// var inputOne = Number(window.prompt("Enter first number"));
// var inputTwo = Number(window.prompt("Enter second number"));
// var inputThree = Number(window.prompt("Enter thirst number"));

// if (inputOne > inputTwo && inputOne > inputThree) {
//   console.log("Max Value " + inputOne);
// } else if (inputTwo > inputOne && inputTwo > inputThree) {
//   console.log(inputTwo + " Max Value");
// } else if (inputThree > inputOne && inputThree > inputTwo) {
//   console.log(inputThree + " Max Value");
// } else {
//   console.log("insert number");
// }

// if (inputOne < inputTwo && inputOne < inputThree) {
//   console.log("min Value " + inputOne);
// } else if (inputTwo < inputOne && inputTwo < inputThree) {
//   console.log(inputTwo + " min Value");
// } else if (inputThree < inputOne && inputThree < inputTwo) {
//   console.log(inputThree + " min Value");
// } else {
//   console.log("insert number");
// }

// ---------------------------------------------------------------------------------

/* 
question 6 

Write a program that allows the user to insert integer number then
check If a number is oven or odd
*/

// var num = Number(window.prompt("enter num"));

// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// -------------------------------------------------------------------------------------

/* 
Question 8

Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant
*/

// var char = window.prompt("enter character");

// if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//   console.log("vowel");
// } else {
//   console.log("Consonant");
// }
// ------------------------------------------------------------

/* 
Question 9 
Write aprogram that allows user to insert integer then print all numbers between 1 to
that’s number
*/
// var userNumber = Number(window.prompt("enter number"));

// for (let i = 1; i <= userNumber; i++) {
//   console.log(i);
// }

// --------------------------------------------------------------------
/* 
Question 10 
Write a program that allows userto insert integerthen print a multiplication table up to 12.

*/

// var userNumber = Number(window.prompt("enter number"));
// for (let i = userNumber; i <= userNumber * 12; i += 5) {
//   console.log(i);
// }

// --------------------------------------------------------------------------------------------

/* 
Question 11
Write aprogram that allows to user to insert number then print all even numbers
between 1 to this number

*/

// var userNumber = Number(window.prompt("enter number"));
// for (let i = 2; i < userNumber; i += 2) {
//   console.log(i);
// }

// -------------------------------------------------------------------------------------------------
/* 
Question 12 

Write aprogram that take two integers then print the power

*/

// var userNumber = Number(window.prompt("enter number"));
// var userNumber2 = Number(window.prompt("enter number"));
// var result = userNumber ** userNumber2;

// console.log(result);

// ----------------------------------------------------------------------------------------------------

/* 
Question 13 :-

Write a program to enter marks of five subjects and calculate total, average and
percentage.

*/

// var userNumberOne = Number(window.prompt("enter first number"));
// var userNumberTwo = Number(window.prompt("enter second number"));
// var userNumberThree = Number(window.prompt("enter thirst number"));
// var userNumberFour = Number(window.prompt("enter fourst number"));
// var userNumberFive = Number(window.prompt("enter fifth number"));
// var total = 500;
// var result =
//   userNumberOne +
//   userNumberTwo +
//   userNumberThree +
//   userNumberFour +
//   userNumberFive;
// console.log("result " + result);
// console.log("average " + result / 5);
// console.log("presntage " + (result * 100) / total + "%");

// --------------------------------------------------------------------------------------

/* 
Question 14
13-Write a program to input month number and print number of days in that
month.

*/

// var monthNumber = Number(window.prompt("enter ur month"));

// if (monthNumber == 1) {
//   console.log("days in month " + "  30");
// } else if (monthNumber == 2) {
//   console.log("days in month" + " 29");
// } else if (monthNumber == 3) {
//   console.log("days in month" + " 30");
// } else if (monthNumber == 4) {
//   console.log("days in month" + "31");
// } else if (monthNumber == 5) {
//   console.log("days in month" + "28");
// } else if (monthNumber == 6) {
//   console.log("days in month" + " 29");
// } else if (monthNumber == 7) {
//   console.log("days in month" + " 30");
// } else if (monthNumber == 8) {
//   console.log("days in month" + " 31");
// } else if (monthNumber == 9) {
//   console.log("days in month" + " 30");
// } else if (monthNumber == 10) {
//   console.log("days in month" + " 29");
// } else if (monthNumber == 11) {
//   console.log("days in month" + " 30");
// } else if (monthNumber == 12) {
//   console.log("days in month" + " 30");
// } else {
//   console.log("insert only  number from 1 to 12");
// }

// -----------------------------------------------------------------------------------------------------------------------------------

/* 
Question 14
Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade


*/

// var Physics = Number(window.prompt("enter Physics mark"));
// var Chemistry = Number(window.prompt("enter Chemistry mark"));
// var Biology = Number(window.prompt("enter Biology Mark"));
// var Mathematics = Number(window.prompt("enter Mathematics mark"));
// var Computer = Number(window.prompt("enter Computer Mark"));

// var total = 500;
// var result = Physics + Chemistry + Biology + Mathematics + Computer;
// var percentage = (result * 100) / total;
// if (percentage >= 90) {
//   console.log("Total Precentage is: " + percentage + " % " + " Grad A");
// } else if (percentage >= 80) {
//   console.log("Total Precentage is: " + percentage + " %" + " Grad B");
// } else if (percentage >= 70) {
//   console.log("Total Precentage is: " + percentage + " %" + " Grad C");
// } else if (percentage >= 60) {
//   console.log("Total Precentage is: " + percentage + " % " + " Grad D");
// } else if (percentage >= 40) {
//   console.log("Total Precentage is: " + percentage + " % " + " Grad E");
// } else if (percentage < 40) {
//   console.log("Total Precentage is: " + percentage + " % " + " Grad F");
// } else {
//   console.log("insert Number");
// }
// ------------------------------------------------------------------------------

// ******************************** Using switch case*******************************

/* 
Question 15 
15- Write a program to print total number of days in month


*/

// var monthNumber = Number(window.prompt("enter ur month"));

// switch (monthNumber) {
//   case 1:
//     console.log("30 Days");
//     break;
//   case 2:
//     console.log("31 Days");
//     break;
//   case 3:
//     console.log("29 Days");
//     break;
//   case 4:
//     console.log("28 Days");
//     break;
//   case 5:
//     console.log("30 Days");
//     break;
//   case 6:
//     console.log("31 Days");
//     break;
//   case 7:
//     console.log("30 Days");
//     break;
//   case 8:
//     console.log("31 Days");
//     break;
//   case 9:
//     console.log("29 Days");
//     break;
//   case 10:
//     console.log("30 Days");
//     break;
//   case 11:
//     console.log("31 Days");
//     break;
//   case 12:
//     console.log("29 Days");
//     break;
// }

// -----------------------------------------------------------------------------
/* 
Question 16
16- Write a program to check whether an alphabet is vowel or consonant

*/
// ----------------------

// var char = window.prompt("enter character");

// switch (char) {
//   case "a":
//     console.log("vowel");
//     break;
//   case "e":
//     console.log("vowel");
//     break;
//   case "i":
//     console.log("vowel");
//     break;
//   case "o":
//     console.log("vowel");
//     break;
//   case "u":
//     console.log("vowel");
//     break;

//   default:
//     console.log("Consonant");
// }

// --------------------------------------------------------------------------

/* 
Question 17
17- Write a program to find maximum between two numbers
*/

// var numOne = Number(window.prompt("Enter First Namber"));
// var numTwo = Number(window.prompt("Enter seccond Namber"));
// var MaxValue;
// switch (true) {
//   case numOne > numTwo:
//     console.log(numOne);
//     break;
//   case numTwo > numOne:
//     console.log(numTwo);
//     break;
// }

// -------------------------------------------------------------------------------

/* 
Question 18 

18- Write a program to check whether a number is even or odd
*/

// var Check = Number(window.prompt("enter Number"));

// switch (true) {
//   case Check % 2 == 0:
//     console.log("even");
//     break;
//   default:
//     console.log("odd");
// }
// -----------------------------------------------------------------------------------------------------

/* 
Question 19

19- Write a program to check whether a number is positive or negative or zero

*/

// var num = Number(window.prompt("enter num"));

// switch (true) {
//   case num > 0:
//     console.log("Positive");
//     break;
//   case num < 0:
//     console.log("negative");
//     break;
//   case num == 0:
//     console.log("zero");
//     break;
//   default:
//     console.log("insert Number");
// }
// -------------------------------------------------------------------------------------

/* 
Question 20 
Write a program to create Simple Calculator

*/

// var numOne = Number(window.prompt("enter First number"));
// var operator = window.prompt("Enter Operator");

// var numTwo = Number(window.prompt("enter Second number"));

// switch (true) {
//   case operator == "+":
//     console.log(numOne + numTwo);
//     document.getElementById("numInput").innerHTML = numOne + numTwo;
//     break;

//   case operator == "-":
//     console.log(numOne - numTwo);
//     document.getElementById("numInput").innerHTML = numOne - numTwo;

//     break;

//   case operator == "*":
//     console.log(numOne * numTwo);
//     document.getElementById("numInput").innerHTML = numOne * numTwo;

//     break;

//   case operator == "/":
//     console.log(numOne / numTwo);
//     document.getElementById("numInput").innerHTML = numOne / numTwo;

//     break;

//   default:
//     console.log("Insert Number  and choose operator from [+-*/]");
//     document.getElementById("numInput").innerHTML = "insert Number";
// }
// ------------------------------------------------------------------------------------------------------------------------------
