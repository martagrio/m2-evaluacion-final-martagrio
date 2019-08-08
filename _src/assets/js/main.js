'use strict';

const urlBase = 'http://api.tvmaze.com/search/shows?q=';

const name = document.querySelector('.input--serie').value;
const list = document.querySelector('.series__list');
const image = document.querySelector('.serie__img');
const title = document.querySelector('.serie__title');

const endpoint = urlBase + name;

fetch(endpoint)
  .then(response => response.json())
  .then(data => getShow(data));

function getShow (array){
  let listContent = '';
  for (let i = 0; i < array.length; i++) {
    title.innerHTML = array[i].show.name;
    image.src = array[i].show.image.original;
    image.alt = array[i].show.name;
  }
  list.appendChild();
}
