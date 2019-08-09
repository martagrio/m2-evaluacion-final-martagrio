"use strict";const urlBase="http://api.tvmaze.com/search/shows?q=",defaultImage="https://via.placeholder.com/210x295/ffffff/666666/?text=TV%20SHOW",list=document.querySelector(".series__list"),favsList=document.querySelector(".favs--series__list"),input=document.querySelector(".input--serie"),button=document.querySelector(".btn"),localShowSaved=JSON.parse(localStorage.getItem("obj"));let myFavs=[];function printFavs(){for(let e=0;e<myFavs.length;e++){const t=document.createElement("li");t.setAttribute("data-id",myFavs[e].id),t.classList.add("fav-show--li");const a=document.createElement("img");a.classList.add("fav-show--image");const s=document.createElement("h3");s.classList.add("fav-show--title");const n=document.createTextNode(myFavs[e].name);s.appendChild(n),t.appendChild(s),a.src=myFavs[e].pic,a.alt=myFavs[e].name,t.appendChild(a),favsList.appendChild(t)}}function preshEnter(e){13===e.keyCode&&getName()}function getName(){const e=input.value.replace(/\s+/gi,"-"),t=urlBase+e;list.innerHTML="",fetch(t).then(e=>e.json()).then(e=>getShow(e))}function getImage(e,t){return null===e[t].show.image?defaultImage:e[t].show.image.medium||e[t].show.image.original}function saveFavs(e){const t=e.currentTarget,a=t.querySelector(".show--image").src,s=t.querySelector(".show--title").innerHTML,n=t.getAttribute("data-id");t.classList.toggle("faveShow");const i={id:n,pic:a,name:s};if(!0===t.classList.contains("faveShow")){void 0===myFavs.find(e=>e.id===n)&&(myFavs.push(i),writeFavs())}else{let e=myFavs.find(e=>e.id===n);const t=myFavs.indexOf(e);t>-1&&myFavs.splice(t,1),writeFavs()}}function writeFavs(){favsList.innerHTML="";for(let e=0;e<myFavs.length;e++){const t=document.createElement("li");t.setAttribute("data-id",myFavs[e].id),t.classList.add("fav-show--li");const a=document.createElement("img");a.classList.add("fav-show--image");const s=document.createElement("h3");s.classList.add("fav-show--title");const n=document.createTextNode(myFavs[e].name);s.appendChild(n),t.appendChild(s),a.src=myFavs[e].pic,a.alt=myFavs[e].name,t.appendChild(a),favsList.appendChild(t)}localStorage.setItem("obj",JSON.stringify(myFavs))}function markFavs(){const e=document.querySelectorAll(".show--li");for(const t of e)t.addEventListener("click",saveFavs)}function getShow(e){for(let t=0;t<e.length;t++){const a=document.createElement("li");a.setAttribute("data-id",e[t].show.id),a.classList.add("show--li");const s=document.createElement("img");s.classList.add("show--image");const n=document.createElement("h3");n.classList.add("show--title");const i=document.createTextNode(e[t].show.name);n.appendChild(i),a.appendChild(n),s.src=getImage(e,t),s.alt=e[t].show.name,a.appendChild(s),list.appendChild(a)}markFavs()}null!==localShowSaved?(myFavs=localShowSaved,printFavs()):getName(),button.addEventListener("click",getName),input.addEventListener("keydown",preshEnter);