const restaurants = [
  { name: "Pizza Palace", rating: 4.8 },
  { name: "Curry Corner", rating: 4.2 },
  { name: "Amazing Asian", rating: 4.5 },
  { name: "Healthy Eats", rating: 3.9 },
];

function recommendRestaurants(restaurants, targetRating) {
  let filteredRestaurants;
  if (targetRating) {
    filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.rating >= targetRating
    );
  } else {
    filteredRestaurants = restaurants;
  }

  filteredRestaurants.sort((a, b) => b.rating - a.rating);

  const restaurantList = document.getElementById("restaurant-list");
  restaurantList.innerHTML = "";

  filteredRestaurants.forEach((restaurant) => {
    const restaurantDiv = document.createElement("div");
    restaurantDiv.className = "restaurant";
    restaurantDiv.innerHTML = `<h2>${restaurant.name}</h2><p>Rating: ${restaurant.rating}</p>`;
    restaurantList.appendChild(restaurantDiv);
  });
}

// Initial call to display all restaurants sorted by rating
recommendRestaurants(restaurants);
