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
var ourArray = ["John", 23];

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


// Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b) {
    console.log(a -b);

}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(10, 5);

//Global Scope and Functions

var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

// Local Scope and Functions
function myLocalScope() {
    var myVar1 = 5;
    console.log(myVar1);
}

myLocalScope();

// Global vs Local Scope in functions

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater"
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

// Return a value from a function with a return

function minusSeven(num) {
    return num -7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// Understanding Undefined Value Returned from a function

var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

// Assignment with a Returned Value

var changed = 0;

function change(num) {
    return (num + 5) / 3;

}

changed =  change(10);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

// Stand in Line
function nextInLine(arr, item) {
    
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Boolean Values

function welcomeToBooleans() {
    return false;
}

//Using Conditional Logic with if Statements

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, its false";
}

function trueOrFalse(wasThatTrue) {
if (wasThatTrue) {
    return "Yes, that was true";
    }
    return "No, that was false";

}

console.log(trueOrFalse(true));

// Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));  

// Comparison with the Strict Equality Operator

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));

// Practice Comparing Different Values
// strict equality wil not convert the types 
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));

// Comparison with the Inequality operator

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));

// Comparison with the Strict Inequality operator

function testStrictNotEqual(val) {

    if (val !== 17) {

        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));

// Comparisons with the Greater than or Equal to Operator
function testGreaterThan(val) {
    if (val > 100) {
        return "over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}

console.log(testGreaterThan(10));

function testGreaterorEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}

console.log(testGreaterorEqual(10));

// Comparisons with the Less than or Equal to Operator

function testLessThan(val) {
    if (val <= 20) {
        return "under 20";
    }
    if  (val <= 50) {
        return "under 50";
    }
    return "50 or over";
}

console.log(testLessThan(10));

// Comparisons with the Logical "And" & "Or" Operator
// And operator in Javascript is &&
// Or operator in Javascript is ||

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(15));


function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside";
}

console.log(testLogicalOr(15));


// Else Statements and ElseIf

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {

        result = "5 or smaller";
    }
    return result;
}

testElse(10);

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }   else if (val < 5) {
        return "Smaller than 5";
    }   else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

console.log(testElseIf(7));


// Logical Order in If Else Statements

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to  10";
    }
}

console.log(orderMyLogic(3));

// Chaining If Else Satements

/*
Write chained if/else if statements to fulfill the following conditions:
num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    }   else if (num < 10) {
        return "Small"
    }   else if (num < 15) {
        return "Medium"
    }   else if (num < 20) {
        return "Large"
    }   else {
        return "Huge"
    }
        
}

console.log(testSize(20));

//Golf Code
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }   else if (strokes <= par - 2 ) {
        return names[1];
    }   else if (strokes <= par - 1 ) {
        return names[2];
    }   else if (strokes <= par) {
        return names[3];
    }   else if (strokes <= par + 1 ) {
        return names[4];
    }   else if (strokes <= par + 2 ) {
        return names[5];
    }   else if (strokes <= par + 3 ) {
        return names[6];
    }
    
}

console.log(golfScore(5, 8));

// Switch Statements

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    return answer;
}

console.log(caseInSwitch(1));

// Default Options with Switch Statements
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
        return answer;
}

console.log(switchOfStuff("a"));

//Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        
    }
    return answer;
}

console.log(sequentialSizes(8));

//Replace If Else Chains with Switch
function chainToSwitch(val) {
    var answer = "";

//     if (val === "bob") {
//         answer = "Marley";
//     }   else if (val === 42) {
//         answer = "The Answer";
//     }   else if (val === 1) {
//         answer = "There is no #1";
//     }   else if (val === 99) {
//         answer = "Missed me by this much!";
//     }   else if (val === 7) {
//         answer = "Ate Nine";
//     }
//     return answer;
// }

    switch (val) { 
        case "bob":
            answer = "Marley";
            break;
        case 42: 
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}
console.log(chainToSwitch())

// Returning Boolean Values from functions

function isLess(a, b) {
    // fix this code
    // if (a < b) {
    //     return true;
    // } else {
    //     return false;
    // }
    return a < b;
 }

console.log(isLess(10, 15));

// Returning Early Pattern from Functions

function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}

console.log(abTest(-2 ,2));

// Counting Cards Function

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break;
    }

    var holdbet = "Hold"
    if (count > 0) {
        holdbet = "Bet"
    }
    return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc("K"); cc("A");
console.log(cc(10));

// Build Javascript Objects
// (properties) - "name": (values) "Camper"
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};


var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []


};

// Javascript Dot Notation

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;;
var shirtValue = testObj.shirt;

// Accessing Object Properties with Bracket Notation

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// Accessing Object Properties with Variables

var testObj = {
    12: "Namath",
    16: "Monatana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

//Updating Object Properties

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

ourDog.name = "Happy Camper";

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": ["freeCodeCamp Campers"]

};

myDog.name = "Happy Coder";

// Add New Properties lke name, legs, tails friends and now bark to an Object


var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

ourDog.bark = "bow-wow";
// using dot notation

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 2,
    "friends": ["freeCodeCamp Campers"]

};

myDog['bark'] = "woof!"
// using bracket notation


// Delete properties From an Object

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    "bark": "bow-wow"
};

delete ourDog.bark;

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof!"

};

delete myDog.tails

// Using Objects for Lookups

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "aplaha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];

    return result;
}

console.log(phoneticLookup("charlie"));

// Testing Objects for Properties

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {

   if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
   } else {
    return "Not Found"
   }
    
}

console.log(checkObj("pet"));
//////////////////
var ourObj = {
    sample: "perfume",
    car: "Land Rover",
    watch: "iwatch"
};

function checkOurObj(val) {
    if (ourObj.hasOwnProperty(val)) {
        return ourObj[val];
    } else {
        return "Not Found"
    }
}

console.log(checkOurObj("auto"));

// Manipulating Complex Objects 
// Javascript objects are a way to store flexible data.. strings, number and arrays.

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTubr video"
        ]
    }
]

// Accessing Nested Objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)

// Accessing Nested Arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"

        ]
    },
    {
        type: "trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];

console.log(secondTree)

// Record Collection

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "Little Red Corvette",
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
            
    },
    "5439": {
        "album": "ABBA GOLD"
    }
};


// Keep a copy of the for the tests
var collectionCopy = JSON.parse(JSON.stringify(collection));


function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    }   else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || []
        collection[id][prop].push(value);
    }   else {
        collection[id][prop] = value;
    }
    return collection;
}

updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));

// Iterate with While Loops

var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

//Iterate with For Loops

var ourArray = [];

//Initialize i (varible) first, the condition - run the loop, then final expression - increment i

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}


var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);

// Iterate ODd Numbers with a For Loop

var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

console.log(ourArray);

var myArray = [];

for (var i = 1; i < 10; i +=2) {
    myArray.push(i);
}

console.log(myArray)

// Count Backwards with a For Loop

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);

}

console.log(ourArray);

var myArray = [];

for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray)

//Iterate Through an Array with a For Loop

var ourArray = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++) {
    ourTotal += ourArray[i];

}

console.log(ourTotal);

var myArr = [2, 3, 4, 5, 6];
var myTotal = 0;

for (var i = 0; i < myArr.length; i++) {
    myTotal += myArr[1];
}

console.log(myTotal);

// Nesting for Loops

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j=0; j < arr[1].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product);

// Iterate with Do... While Loops

var myArray = [];
var i = 10;

// this is a while loop
while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(i, myArray);

// this is a do while loop

do {
    myArray.push(i);
    i++;
}   while (i < 5)



console.log(i, myArray);

//Profile Lookup
 var contacts = [
    {
        "firstName": "Akiara",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "BrowniePoints"]

    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]

    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]

    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "Unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]

    }
 ];
 

 function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "NO such contact";
 }

 // Change these values to test your funtion
 var data = lookUpProfile("Sherlock", "Hello");

 console.log(data);

 // Generate Random Fractions

function randomFraction(){

    return Math.random();
}

console.log(randomFraction());

//Generate Random Whole Numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.random();
}

console.log(randomWholeNum());

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

// Generate Whole numbers within a Range

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);

//Use the parseInt Function

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

// console.log(numberToString);

// Use the parseInt Function with a Radix

function convertToInteger(str) {
    return parseInt(str, 2)

}

convertToInteger("10011");

// use the Ternary Operator

// condition ? statement-if-true :statement-if-false;

function checkEqual(a, b) {
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
}

checkEqual(1, 2);

// Using the Termary Operator

function checkEqual(a, b) {
   return a === b ? true : false; // do not use ex. of ternary operator

   return a === b; // better option
}

checkEqual(1, 2);

// Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"

}

console.log(checkSign(0));

// Differences Bewteen the var and let Keywords
// let onlu allows to declare a variable once

let catName = "Quincy";
let quote;

// you can still define the variable more than once
catName = "Beau";

// use strict is often set at the top of full javascript file to catch coding errors
function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}

catTalk();

// Compare Scopes of the var and let Keywords

function checkScope() {
"use strict";
    let i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();

// Declare a REad-Only Variable with the const Keyword

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " cool!";
    

    for (let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}

printManyTimes("freeCodeCamp");

// Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    //s = [2, 5, 7]; because const is use we can reassign the array
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

}
editInPlace();

console.log(s)

// Prevent Object Mutation
// object.freeze will prevent data mutation

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);
    
    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI)

// Use Arrow Functions to Write Concise Anonymous Functions
// Whenever you have an anonyomous function you can convert it into an arrow function =>

// var magic = function() {
//     return new Date();
// };

// using the Arrow function instead of Anonymous function
const magic = () =>  new Date();

// Write Arrow Functions with Parameters

// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// };

// console.log(myConcat([1, 2], [3, 4, 5]));

// using the Arrow function 

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// Write HIgher Order Arrow Functions
// Arrow functions work really well with higher order functions such as map, filter and reduce.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isSafeInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray) ;
console.log(squaredIntegers);

// Write Higher Order Arrow Functions

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

// Use the Rest Operator with Function Parameters - the rest operator is ...

// const sum = (function() {
//     return function sum(...args) {
//         //const args = [x, y, z]; (since the rest operator is bein used dont need this line)
//         return args.reduce((a, b) => a + b, 0);
//     };
// })();
// console.log(sum(1, 2, 3, 4));

// Use the Spread Operator to Evaluate Arrays In-Place
// spread operator 

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
    arr2 = [...arr1]; // change this line
    arr1[0] = 'potato'
})();

console.log(arr1);

// USe Destructuring Assignment to Assign Variables from Objects

var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const { x : m, y : k, z : p } = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    
    const { tomorrow : tempOfTomorrow } = avgTemperatures;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

// Destructing Assignment with Nested Objects
// We can also use destructuring assignment to assign variables from nested objetcs

const LOCAL_FOREST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FOREST));

// Use Destructuring Assignment to Assign Variables from Arrays

const [l, q, , h] = [1, 2, 3, 4, 5, 6];
console.log(l, q, h);

let e = 8, f = 6;
(() => {
    "use strict";
    [e, f]= [f, e]

})();
console.log(e);
console.log(f);

// Use Destructuring Assignment with the Rest Operator

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    
    const [ , , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
// good to use with API calls
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function() {

    return function half({max, min}) {
        return (max + min) / 2.0;
    };

})();
console.log(stats);
console.log(half(stats));

// Create Strings using Template Literals

const person = {
    name: "Zodiac Hasbro",
    age: 56
}

//Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreaker"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning"> ${arr[i]}</li>`)
    }

    return resultDisplayArray
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)

// Write Concise Object Liteal Declarations Using Simple Fields

// const createPerson = (name, age, gender) => {
    
//     return {
//         name: name,
//         age: age,
//         gender: gender
//     };
// };
// console.log(createPerson("zodiac Hasbro", 56, "male"));

//using simple fields

const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("zodiac Hasbro", 56, "male"));


// Write Concise Declarative Functions

// const bicycle = {
//     gear: 2,
//     setGear: function(newGear) {
//         "use strict";
//         this.gear = newGear;
//     }
// };

// bicycle.setGear(3);
// console.log(bicycle.gear);

//simpler way to put a function with an Object
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// Use class Syntax to Define a Constructor Function

// var SpaceShuttle = function(targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet)

// Using a constructor



class SpaceShuttle {
    constructor(targetPlanet) {
       this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)


function makeClass() {
    class Vegetable{
        constructor(name) {
            this.name = name
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

// Use getters and setters to Control Acces to an Object

class Book {
    constructor(author){
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;

    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

// Understand the Differences Between import and require
// in string_function.js file we import capitalize function 
// import { capitalizeString } from "./string_function"

const cap = capitalizeString("hello");

console.log(cap);

// Use export to Reuse a Code Block

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString }; // export this funtion and the two variables below so can import to another file

export const foo = "bar";
export const bar = "foo"


// Use * to import Everything from a File

import * as capitalizeStrings from "capitalize_String";

// Create an Export Fallback with export default

export default function subtract(x,y) { return x -y;} // Often used if you only want to export one thing from a file

// Import a Default Export

import subtract from "math_functions"

subtract(7,4);

