'use strict';

let numbers4: number[] = [3, 4, 5, 6, 7];

let number2: number = 0;

numbers4.forEach(item => {
    number2 += item;
});

console.log(number2);