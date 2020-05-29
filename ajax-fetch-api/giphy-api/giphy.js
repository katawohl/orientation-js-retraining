'use strict';

let div = document.querySelector('#output')

fetch('https://api.giphy.com/v1/gifs/search?api_key=VopGp0I0Fgn2Dgq029LJ0dokfh4diTp7&q=dog&limit=16&offset=0&rating=G&lang=en')
    .then((res) => res.json())
    .then((data) => {
        let gifs = Object.values(data)[0];

        gifs.forEach(gif => {
            let gifDiv = document.createElement('div');
            gifDiv.style.display = "inline-block";
            gifDiv.style.margin = "10px";

            let gifImage = document.createElement('iframe');

            gifImage.setAttribute('src', gif.embed_url);
            gifImage.setAttribute('with', '480');
            gifImage.setAttribute('height', '480');
            gifImage.setAttribute('frameborder', '0');

            gifDiv.appendChild(gifImage);

            div.appendChild(gifDiv);
        });

    });
