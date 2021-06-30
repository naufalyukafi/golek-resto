import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate, createRestaurantNull } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <section class="content">
            <div id="exploreRestaurant">
                <div>
                <h1 class="list__menu-title">Your Favorite Restaurants</h1>
                <div id="posts" class="posts">

                </div>
                </div>
            </div>   
        </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#posts');
    const restaurantsExplore = document.querySelector('#exploreRestaurant');
    if (restaurants.length === 0) {
      restaurantsExplore.innerHTML += createRestaurantNull();
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Like;
