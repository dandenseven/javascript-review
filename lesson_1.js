/* Data Types:
undefined, null, boolean, strig, symbol, number, and object
*/

// variable - declaring a varible using -

var myName = "Beau";
// used in a global scope
myName = 8

let ourName = "freeCodeCamp"
// used in the local scope that it is declared in

const pi = 3.14
//the varible can not be changed

var a;
// assign a variable

var b = 2;
//assigning a variable and declaring 

a = 7;

b = a;

console.log(a)

// Declarations is camelCase
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments 
studlyCapVar = 10;
properCamelCAse = "A String";
titleCaseOver = 9000;

//adding numbers, subtracting, multiply, division
var sum = 10 + 10;
console.log(sum)

var difference = 45 - 33;
console.log(difference)

var mutliply = 10 * 80;
console.log(mutliply)

var quotient = 66 / 33;
console.log(quotient)

// incrementing numbers
var myVar = 87;

myVar = myVar + 1;
console.log(myVar)

// faster incrementing using ++
myVar ++;
console.log(myVar)

// decrementing numbers
myVar = myVar - 1;
console.log(myVar)

// faster decrementing using --
myVar --;
console.log(myVar)

// decimal known as floats
var ourDecimal = 5.7;

var myDecimal = 0.009;

// multiply floats
var product = 2.0 * 2.5;
console.log(product)

// dividing floats
var quotient = 4.4 / 2.0;
console.log(quotient)

// finding remainder

var remainder;
remainder = 11 % 3;
console.log(remainder)

var a = 3;
var b = 17;
var c = 12;

//sames as using the + to add
// a = a + 12;
// b = b + 9;
// c = c + 7;

// console.log(a)
// console.log(b)
// console.log(c)

a += 12;
b += 9;
c += 7;
console.log(a)
console.log(b)
console.log(c)

// Compound Assignment with Augmented Subtraction, multiplication, division
a -= 6;
b -= 5;
c -= 9;

a *= 5;
b *= 9;
c *= 10;

a /= 12;
b /= 4;
c /= 8;

// string literals
var myFirstName = "Dane"
var myLastName = "Knight"

/*****
CODE OUPUT
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
*****/

var myString = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myString)

//concatenate strings
var myStr = "This is the start. " + " This is the end";
console.log(myStr)

var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr)

var myName = "Beau";
var myStr = "My name is "+ myName + " and I am well.";
console.log(myStr)


// Appending variables to string

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "worthwile";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr)

// string length

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength)
console.log(firstName.length)

var lastNameLentgh = 0;
var lastName = "Lovelace";

lastNameLentgh = lastName.length;
console.log(lastNameLentgh)

// Bracet Notation to Find First Character in String

var firstLetterOfFirstName = "";
var firstName = "Ada"

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName)

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName)

// string immutability
var myStr = "Jello World";

//Bracket Notation to Find last character in string

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName)

var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName)

var lastLetterOfLastName = lastName[lastName.length - 3];
console.log(lastLetterOfLastName)

// Word Banks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to ther store " + myAdverb
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Storing Multiple Values with Arrays
var ourArray = ["JOhn", 23];

var myArray = ["Quincy", 1];
console.log(myArray)

// Nested Arrays

var ourArray = [["the unoverse", 42], ["everythin", 101010]];

var myArray = [["BUlls", 23], ["White Sox", 6]];

//Access Data in Array

var ourArray = [50,60,70];
var ourData = ourArray[0];

console.log(ourData)

// Modify Array Data with Indexes

var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

var myArray = [20,57,87];
myArray[0] = 36;
console.log(myArray)

// Access Multi -Dimensional array with Indexes
var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12], 13, 14]];

//the firts bracket points to the first position and the next bracket point to the index in the first postion.
var myData = myArray[0][0];
console.log(myData)
var myData = myArray[2][1];
console.log(myData)

//Multiple Array with Push
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray)

var myArray = [["John", 23], ["cat, 2"]];
myArray.push(["dog", 3]);
console.log(myArray)

// Multiple Arrays with pop()
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

var myArray = [["John", 23], ["cat", 2]];
var renovedFromMyArray = myArray.pop();
console.log(renovedFromMyArray)

console.log(myArray)

//Manipulate Arrays with shift(), removed the first element
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();

var myArray = [["john", 23], ["dog", 3]];

var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray)

console.log(myArray)

//Manipulate Arrays with unshift, adds an element to the beginning of an array
var ourArray = ["Stimpson", "j", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

var myArray = [["john", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul", 35]);

//shoppping list
var myList = [["cereal", 3], ["milk"], ["bananas", 3], ["eggs", 12]];

// writing reusable functions
function ourReusableFunction() {
    console.log("Heyya, World")
}

ourReusableFunction();


function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();


