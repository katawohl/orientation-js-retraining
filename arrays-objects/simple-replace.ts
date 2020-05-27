'use strict';

let example: string = 'In a dishwasher far far away';

let stringToReplaceAsRP : RegExp = /dishwasher/gi;

example = example.replace(stringToReplaceAsRP, "galaxy");

console.log(example);

export = example;