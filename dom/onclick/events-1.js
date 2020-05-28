'use strict';

let button = document.querySelector('button');
let body = document.querySelector('body');

button.onclick = () => {
    if (!body.classList.contains('party')) {
        body.className = 'party';
    } else {
        body.className = '';
    }
};