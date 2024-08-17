import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../Shimmer/Shimmer-Home";
function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetchData();
    //fetchPost();
    ("useEffect");
  }, []);
  ("body");
  async function post(request) {
    try {
      const response = await fetch(request);
      const data = await response.json();
      data;
    } catch (err) {
      err;
    }
  }
  function fetchPost() {
    const request = new Request(
      "https://www.swiggy.com/dapi/restaurants/list/update",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          filters: {},
          lat: 12.9803204,
          lng: 77.7145097,
          nextOffset: "CJhlELQ4KIDgl4PDjNSsdjCnEzgC",
          page_type: "DESKTOP_WEB_LISTING",
          seoParams: {
            seoUrl: "https://www.swiggy.com/",
            pageType: "FOOD_HOMEPAGE",
            apiName: "FoodHomePage",
          },
          _csrf: "svaWn1X4d2PV-m1tcj0hKmauzO5S5lXAeTOmnIaQ",
        }),
      }
    );
    post(request);
  }
  async function fetchData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9803204&lng=77.7145097"
    );
    const data = await response.json();
    setLoaded(true);
    data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setRestaurants(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }
  const handleFilter = () => {
    const filteredRestaurants = restaurants.filter((r) => r.info.avgRating > 4);
    setRestaurants(filteredRestaurants);
  };
  return loaded ? (
    <div className="body-container">
      <div className="m-4 p-4">
        <button
          onClick={() => handleFilter()}
          className="border-solid border-2 bg-gray-50 p-2 rounded-xl"
        >
          Top Restaurants
        </button>
      </div>
      <div className="flex flex-wrap m-3 cursor-pointer ">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resDetails={restaurant} />
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
}
export default Body;
