'use strict';

let asteroids =  document.querySelector('ul');
let newAsteroid = document.createElement('li');

newAsteroid.textContent = 'The Green Fox';

asteroids.appendChild(newAsteroid);

let lamplighter = document.createElement('li');

lamplighter.textContent = 'The Lamplighter';

asteroids.appendChild(lamplighter);

let heading = document.createElement('h2');

heading.textContent = 'I can add elements to the DOM!';

let container = document.querySelector('.container');

container.appendChild(heading);

let img = document.createElement('img');

img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Tobyburrower.jpg');

container.appendChild(img);