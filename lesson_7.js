// Destructuring 

// Assign variables from objects
// Normal Way
var voxel = {x:3.6, y:7.4, z: 6.54 };
// var x = voxel.x; // x = 3.6
// var x = voxel.y; // x = 7.4
// var x = voxel.z; // x = 6.54

//with Destructuring
const {x, y,} = voxel;
console.log(x);
const {x : a, y : b, z : c} = voxel;
console.log(b);


// Assign variables from nested objects
const nest= {
    start: {x: 5, y: 6},
    end: {x: 6, y: -9}
};
const { start: { x: startX, y: startY}} = nest;
console.log(startX);

// Assign Variables from Arrays
const [q,,, r] = [1, 2, 3, 4, 5];
console.log(q, r);

// Rest Operator to Reassign Array Elements
const [t, u, ...rest] = [1, 2, 3, 4, 5];
console.log(t, u);
console.log(rest)

// Pass an Object asa Functions's Parameters
//const profileUpdate = ({ name, age, nationality, location}) => {
    // do something with these variables
//}

// Destructuring
const profileUpdate = ({ name, age }) => {
    // do something with these variables
}