'use strict';

let a: number = 123;
let b: number = 526;

console.log(a);
console.log(b);

let temp: number = a;
a = b;
b = temp;

console.log(a);
console.log(b);