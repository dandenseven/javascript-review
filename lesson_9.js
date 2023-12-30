// Import / Export

//NAMED EXPORTS

//---------lib.s-------------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(7));
}


// Import PART OF A MODULE

//-------main.js---------
import { square, diag } from 'lib';
console.log(square(11));
console.log(diag(4, 3));

// IMPORTING COMLETE MODULE

//------main.js--------
import * as lib from 'lib';
console.log(lib.square(11));
console.log(lib.diag(4, 3));


// IMPORTING WITH MORE CONVENIENT ALAIS
import{reallyReallyLongModuleMemberName as shortName}
    from 'my-module';

// SINGLE DEFAULT EXPORT

//-----myFunc.js-----
export default function () { ... } // no semicolon!

//------main1.js--------
import myFunc from 'myFunc';
myFunc();



























































