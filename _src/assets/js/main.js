'use strict';

const urlBase = 'http://api.tvmaze.com/search/shows?q=';
const defaultImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
const name = document.querySelector('.input--serie').value;
const list = document.querySelector('.series__list');

const endpoint = urlBase + name;

fetch(endpoint)
  .then(response => response.json())
  .then(data => getShow(data));

function getShow (array){

  for (let i = 0; i < array.length; i++) {
    const show = document.createElement('li');
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const titleContent = document.createTextNode(array[i].show.name);
    image.src = array[i].show.image.original || array[i].show.image.medium || defaultImage;
    image.alt = array[i].show.name;
    title.appendChild(titleContent);
    show.appendChild(title);
    show.appendChild(image);
    list.appendChild(show);
  }

}



