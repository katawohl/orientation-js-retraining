'use strict';

let pic = document.querySelector('img');

console.log(pic.getAttribute('src'));

pic.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Tobyburrower.jpg');

let url = document.querySelector('a');

url.setAttribute('href', 'https://www.greenfoxacademy.com/');

let button = document.querySelector('.this-one');

button.disabled = true;

button.innerHTML = 'Don\'t click me!';