import { useEffect, useState } from "react";
import res from "../../data.json";
import RestaurantCard from "./RestaurantCard";
function Body() {
  const data = res.data;
  const [restaurants,setRestaurants] = useState([]);
  useEffect(()=>{
    setRestaurants(res.data);
  },[]);
  const handleFilter = () =>{
    const filteredRestaurants = restaurants.filter(
      (r) => r.info.rating.aggregate_rating>4
    );
    setRestaurants(filteredRestaurants);
  }
  return (
    <div className="body-container">
      <div className="search">
        <button onClick={handleFilter}>Top Restaurants</button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard resDetails={restaurant} />
        ))}
      </div>
    </div>
  );
}
export default Body;
