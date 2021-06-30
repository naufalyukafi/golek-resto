import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailReviewTemplate, createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div class="restaurant" id="restaurant">
          <div id="detailRestaurant"></div>
          <div id="detailReviewRestaurant"></div>
          <div id="likeButtonContainer"></div>
        </div>   
      `;
  },

  async afterRender() {
    this._scrolToTop();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detailRestaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const restaurantReviewContainer = document.querySelector('#detailReviewRestaurant');
    restaurantReviewContainer.innerHTML = createRestaurantDetailReviewTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
        pictureId: restaurant.restaurant.pictureId,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
      },
    });
  },

  _scrolToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },

};

export default Detail;
