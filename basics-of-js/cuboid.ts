'use strict';

function calculateSurfaceArea(x: number, y: number, z: number){
    return 2 *(x * y + x * z + y *z);
}

function calculateVolume(x: number, y: number, z: number){
    return x * y *z;
}

let lenght: number = 23.55;
let height: number = 4.8888;
let width: number = 3.877;

console.log("Surface area: " + calculateSurfaceArea(lenght, height, width));
console.log("Volume: " + calculateVolume(lenght, height, width));