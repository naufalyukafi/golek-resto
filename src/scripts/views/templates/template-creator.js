import CONFIG from '../../global/config';

const getCategories = (restaurant) => {
  let categories = '';
  restaurant.forEach((category) => {
    categories += `<p>${category.name}</p>`;
  });
  return categories;
};

const getMenuSkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
        <div class="list__menu-restaurant">
          <img class="list__menu-picture skeleton" src='./images/placeholder.jpg' alt='skeleton'>
          <div class="list__menu-name">
            <h3>Bebek Goreng</h3>
          </div>
        </div>
    `;
  }
  return template;
};

const getMenusFood = (restaurant) => {
  let menus = '';
  restaurant.forEach((menu) => {
    menus += `
        <div class="list__menu-restaurant">
          <img class="list__menu-picture lazyload" data-src="${CONFIG.IMAGE_DEFAULT_FOOD_URL}" alt="Minuman ${menu.name}">
          <div class="list__menu-name">
            <h3>${menu.name}</h3>
          </div>
        </div>
    `;
  });
  return menus;
};

const getMenusDrink = (restaurant) => {
  let menus = '';
  restaurant.forEach((menu) => {
    menus += `
      <div class="list__menu-restaurant">
        <img class="list__menu-picture lazyload" data-src="${CONFIG.IMAGE_DEFAULT_DRINK_URL}" alt="Minuman ${menu.name}">
        <div class="list__menu-name">
          <h3>${menu.name}</h3>
        </div>
      </div>
    `;
  });
  return menus;
};

const getReview = (restaurant) => {
  let reviews = '';
  restaurant.forEach((review) => {
    reviews += `
      <div class="review__restaurant">
        <div style="display: flex; justify-content: space-between;">
          <h3 class="review__restaurant-title">${review.name}</h3>
          <span class="review__restaurant-date">${review.date}</span>
        </div>
        <p class="review__restaurant-content">${review.review}</p>
      </div>
    `;
  });
  return reviews;
};

const getStarRating = (rating) => {
  let starsRating = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < parseFloat(rating); i++) {
    if ((parseFloat(rating)) > i && i === (parseInt(rating, 10))) {
      starsRating += '<i class="fa fa-star-half-o" aria-hidden="true"></i> ';
    } else {
      starsRating += '<i class="fa fa-star" aria-hidden="true"></i> ';
    }
  }
  return starsRating;
};

const createSkeletonRestaurantDetailTemplate = (count) => `
  <article class="headline">
    <figure class="headline__figure">
        <img src='./images/placeholder.jpg' alt='skeleton'">
    </figure>
    <div class="headline__content-detail">
        <h2 class="headline__title-detail skeleton">Yukafi Resto</h2>
        <div class="rating__detail">
            <span class="skeleton">Bintang 5</span>
        </div>
        <h3 class="headline__sub-title skeleton"><i class="fa fa-map-marker" aria-hidden="true"></i> Jl Banaspati no 9, Lumajang</h3>
        
        <p class="headline__description skeleton">Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante.</p>
        <h4 class="category__title skeleton">Kategori</h4>
        <div class="category__item skeleton">Modern</div>
    </div>
  </article>
  <h2 class="list__menu-title skeleton">List Menu</h2>
  <div class="list__menu-container">
    ${getMenuSkeleton(count)}
  </div>   
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <article class="headline">
        <figure class="headline__figure">
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="Restaurant ${restaurant.restaurant.name}">
        </figure>
        <div class="headline__content-detail">
            <h2 class="headline__title-detail">${restaurant.restaurant.name}</h2>
            <div class="rating__detail">
                <span>${getStarRating(restaurant.restaurant.rating)} </span>
                <p style="margin-top: -5px; padding-left: 5px">(${restaurant.restaurant.rating})</p>
            </div>
            <h3 class="headline__sub-title"><i class="fa fa-map-marker" aria-hidden="true"></i> ${restaurant.restaurant.address}, ${restaurant.restaurant.city}</h3>
            
            <p class="headline__description">${restaurant.restaurant.description}</p>
            <h4 class="category__title">Kategori</h4>
            <div class="category__item">${getCategories(restaurant.restaurant.categories)}</div>
        </div>
    </article>
    <h2 class="list__menu-title">List Menu</h2>
    <div class="list__menu-container">
        ${getMenusFood(restaurant.restaurant.menus.foods)}
        ${getMenusDrink(restaurant.restaurant.menus.drinks)}
    </div>    
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
    <article class='post__item'>
      <div class='post__item-top'>
          <img class='post-item__thumbnail' src='./images/placeholder.jpg' alt='skeleton'>
      </div>
      <div class='post-item__content'>
          <h1 class='post-item__title skeleton'>Yukafi Resto</h1>
          <p class='post-item__description skeleton'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus libero nemo sint eum saepe eligendi beatae explicabo ea quidem ipsam, accusamus voluptatibus suscipit ratione rerum voluptatum.</p>
      </div>
  </article>
    `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
    <article class='post__item' key=${restaurant.id}>
        <div class='post__item-top'>
            <div class='post__item-tag'>
                <button class='tag__city'>Kota, ${restaurant.city}</button>
                <button class='tag__rating'>Rating: ${restaurant.rating}</button>
            </div>
            <img class='post-item__thumbnail lazyload'
                data-src='${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://i.picsum.photos/id/666/800/450.jpg?grayscale&hmac=cijtLqs6SMxlZEcOinrh0ZHckTRMJXWjJc-ithauWk0'}'
                alt='Restaurant ${restaurant.name}'>
        </div>
        <div class='post-item__content'>
            <h1 class='post-item__title'><a href="${`/#/detail/${restaurant.id}`}" class='post-item_link'>${restaurant.name || '-'}</a></h1>
            <p class='post-item__description'> ${restaurant.description || '-'}</p>
        </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-bookmark-o"" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-bookmark" aria-hidden="true"></i>
  </button>
`;

const createRestaurantDetailReviewTemplate = (restaurant) => `
  <h2 class="list__menu-title">Review</h2>
  <div class="review__container">
      ${getReview(restaurant.restaurant.customerReviews)}
  </div>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createRestaurantDetailReviewTemplate,
  createSkeletonRestaurantTemplate,
  createSkeletonRestaurantDetailTemplate,
};
