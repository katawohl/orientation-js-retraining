'use strict';

let pars = document.querySelectorAll('p');

if (pars[3].classList.contains('dolphin')) {
    pars[0].innerHTML = 'pear';
}

if (pars[0].className === 'apple'){
    pars[2].innerText = 'dog';
}

pars[0].classList.add('.red');

pars[1].style.borderRadius = '1%';
