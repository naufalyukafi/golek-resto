import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';

const ExploreRestaurants = {
  async render() {
    return `
        <div id="hero" class="hero">
            <div class="hero__inner">
                <h1 class="hero__title">Golek Resto</h1>
                <p class="hero__tagline">Golek Resto - Explore Restaurant, Search Restaurant, Popular & Rating
                    Restaurant
                </p>
            </div>
        </div>
        <section class="content">
        <article class="headline">
            <figure class="headline__figure">
                <picture>
                  <source type="image/webp" media="(max-width: 600px)" srcset="./images/heros/hero-image_3.webp">
                  <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/heros/hero-image_3-small.jpg">
                  <img src="./images/heros/hero-image_3-large.jpg" width="1350" height="900" alt="About Nggolek Resto"></img>
                  <figcaption>Nggolek Resto Mei 2021</figcaption>
                </picture>
            </figure>
            <div class="headline__content">
                <h1 class="headline__title">Golek Resto</h1>
                <p class="headline__description">Golek Resto, is a website for searching and finding your favorite
                    restaurant, you can search for your favorite food, drink, besides that you can also see reviews
                    of the restaurant you are looking for and you can also save a list of your best restaurant
                    version.</p>
            </div>
        </article>
        <div id="exploreRestaurant">
          <div class="explore">
            <h1 class="explore__label">Explore Restaurant</h1>
            <div id="posts" class="posts">
              ${createSkeletonRestaurantTemplate(20)}
            </div>
          </div>
        </div>    
        </section>   
        `;
  },

  async afterRender() {
    const listRestaurants = await RestaurantSource.exploreRestaurants();
    const listRestaurantsContainer = document.querySelector('#posts');
    listRestaurantsContainer.innerHTML = '';
    listRestaurants.forEach((restaurant) => {
      listRestaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ExploreRestaurants;
