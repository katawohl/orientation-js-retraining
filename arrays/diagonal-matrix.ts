'use strict';

let matrix: number[][] = [];

let matrixLength: number = 4;

for(let i:number = 0; i <matrixLength; i++){
    matrix.push(new Array(matrixLength));
}

for (let i: number = 0; i < matrixLength; i++) {
    for (let j: number = 0; j < matrixLength; j++) {
        if(j === i){
            matrix[i][j] = 1;
        } else{
            matrix[i][j] = 0;
        }
    }
}

console.log(matrix);