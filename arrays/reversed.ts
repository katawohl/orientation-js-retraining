'use strict';

let numbers5: number[] = [3, 4, 5, 6, 7];

let numbers5Rev: number[] = [];

for (let i: number = 0; i < numbers5.length; i++) {
    numbers5Rev.push(numbers5[numbers5.length - 1 - i]);
}

console.log(numbers5Rev);

console.log(numbers5.reverse());

