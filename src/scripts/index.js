import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

const MENU = document.querySelector('#menu');
const DRAWER = document.querySelector('#drawer');
const POSTS = document.querySelector('#posts');

MENU.addEventListener('click', event => {
  DRAWER.classList.toggle('open');
  event.stopPropagation();
});

const getContent = data => {
  data.restaurants.map(
    item =>
      (POSTS.innerHTML += `
    <article class='post__item' key=${item.id}>
        <div class='post__item-top'>
            <div class='post__item-tag'>
                <button class='tag__city'>Kota, ${item.city}</button>
                <button class='tag__rating'>Rating: ${item.rating}</button>
            </div>

            <img class='post-item__thumbnail'
                src='${item.pictureId}'
                alt='${item.name}'>
        </div>
        <div class='post-item__content'>
            <h1 class='post-item__title'><a href='#' class='post-item_link'>${item.name}</a></h1>
            <p class='post-item__description'> ${item.description}</p>
        </div>
    </article>
    `)
  );
};

getContent(data);
