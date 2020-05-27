'use strict';

/*
<!-- You can work in the html or in a separate js file. Like:
<script>
  1. store the element that says 'The King' in the 'king' variable.
  console.log it.
  2. store 'The Businessman' and 'The Lamplighter'
  in the 'businessLamp' variable.
  console.log each of them.
  3. store 'The King' and 'The Conceited Man'
  in the 'conceitedKing' variable.
  alert them one by one.
  4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
  in the 'noBusiness' variable.
  console.log each of them.
</script>
*/

let king = document.querySelector('#b325');

console.log(king.innerHTML);

let busienessLamp = document.querySelectorAll('.big');

console.log(busienessLamp[0].innerHTML);
console.log(busienessLamp[1].innerHTML);

let container = document.querySelector('.container');
let conceitedKing = container.querySelectorAll('div');

alert(conceitedKing[0].innerHTML);
alert(conceitedKing[1].innerHTML);

let noBusiness = document.querySelectorAll('div');

console.log(noBusiness[0].innerHTML);
console.log(noBusiness[1].innerHTML);
console.log(noBusiness[2].innerHTML);
