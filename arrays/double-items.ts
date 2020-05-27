'use strict';

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

/*
drinks.map(function (drink, index) {
    drink += drink;
    console.log(drink);
})
*/
let newArray: string[] = [];

drinks.forEach(drink => {
    drink += drink;

    newArray.push(drink);
}
)

console.log(newArray);