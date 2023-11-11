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

firstLetterOfLastName = lastName[4];
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

