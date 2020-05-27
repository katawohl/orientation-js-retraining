'use strict';

let animals: string[] = ['koal', 'pand', 'zebr'];

animals.forEach(animal => {
    animal += 'a';
    console.log(animal);
})