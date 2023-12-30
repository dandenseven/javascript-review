//* Arrow Functions*/

// Syntax
(param1, param2) => { statements }
(param1, param2) => expression
(param1, param2) => { return expression; }

(singleParam) => { statements }
singleParam => { statements }

() => { statements }
() => expression 
() => { return expression; }

(param1, param2, paramN) => expression

//NORMAL FUNCTION
var multipy = function(x, y) {
    return x * y;
};

// ARROW FUNCTION
var multipy = (x, y) => { return x * y };
// or
var multiply = (x, y) => x*y;

// Example
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

var materialslength1 = materials.map(function(material) {
    return material.length;
});

var materialslength2 = materials.map((material) => {
    return material.length;
});

var materialslength1 = materials.map(material => material.length);

// No binding of 'this'
function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 100);
}

var p = new Person();

// Returning object literals
var func = () => ({foo: 1});

// Line breaks not used with arrow functions unless {} are used
var func = () => 1;