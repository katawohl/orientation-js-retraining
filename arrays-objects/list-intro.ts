'use strict';

let names: string[] = new Array();

console.log(names.length);

names.push('William');

console.log(names.length === 0);

names.push('John');
names.push('Amanda');

console.log(names.length);
console.log(names[2]);

names.forEach(name => {
    console.log(name);
});

names.forEach(name => {
    console.log((names.indexOf(name) + 1) + '. ' + name);
});

names.pop();

console.log(names);

names = [];

console.log(names);