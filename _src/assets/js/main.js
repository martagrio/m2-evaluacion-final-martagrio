'use strict';

const urlBase = 'http://api.tvmaze.com/search/shows?q=';

const name = document.querySelector('.input--serie').value;
console.log(name);
const endpoint = urlBase + name;

console.log(endpoint);
