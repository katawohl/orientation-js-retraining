'use strict';

fetch('https://api.giphy.com/v1/gifs/search?api_key=VopGp0I0Fgn2Dgq029LJ0dokfh4diTp7&q=dog&limit=25&offset=0&rating=G&lang=en')
    .then((res) => res.json())
    .then((data) => {
        let gifs = Object.values(data)[0];
        let list = document.querySelector('#output');

        gifs.forEach(gif => {
         let listItem = document.createElement('li');

         listItem.innerText = gif.title;

         list.appendChild(listItem);
        });

    });
