'use strict';

const urlBase = 'http://api.tvmaze.com/search/shows?q=';
const defaultImage = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV%20SHOW';
const list = document.querySelector('.series__list');
const input = document.querySelector('.input--serie');
const button = document.querySelector('.btn');

const getName = () => {
  const name = input.value.replace(/\s+/gi, '-'); //to put - instead of spaces
  const endpoint = urlBase + name;
  list.innerHTML = '';

  fetch(endpoint)
    .then(response => response.json())
    .then(data => getShow(data));
};

//Function to add a default photo if there is no one in the array for the show
function getImage(array, i) {
  if (array[i].show.image === null) {
    return defaultImage;
  }
  else {
    return array[i].show.image.medium || array[i].show.image.original;
  }
}

function getShow (array){

  for (let i = 0; i < array.length; i++) {
    const show = document.createElement('li');
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const titleContent = document.createTextNode(array[i].show.name);
    title.appendChild(titleContent);
    show.appendChild(title);

    image.src= getImage(array, i);
    image.alt = array[i].show.name;
    show.appendChild(image);
    list.appendChild(show);
  }
}

button.addEventListener('click', getName);

//function so we can use enter to valid the value
function preshEnter(event) {
  if (event.keyCode === 13) {
    getName();
  }
}

input.addEventListener('keydown', preshEnter);
