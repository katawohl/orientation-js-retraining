'use strict';

let lineCount: number = 4;

for (let i: number = 1; i <= lineCount; i++) {
    for (let space: number = 1; space <= lineCount; space++) {
        console.log(" ");
    }
    for (let star: number = 1; star <= (2 * i - 1); star++){
        console.log("*");
    }
}