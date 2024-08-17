import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimmerRestaurant from "../Shimmer/Shimmer-Restaurant";
import RestaurantCategory from "./RestaurantCategory";
function Restaurant() {
  const { resId } = useParams();
  const [title, setTitle] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.024547000000002&lng=80.15487700000001&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await response.json();
    setLoading(false);
    let arr = [],
      res = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    for (let i = 0; i < res.length; i++) {
      if (res[i]?.card?.card?.itemCards) {
        arr.push(res[i].card.card);
      }
    }
    setMenuItems(arr);
    setTitle(data.data.cards[0].card.card.text);
  }
  return loading ? (
    <ShimmerRestaurant />
  ) : (
    <div className="m-4 p-4 flex flex-col ">
      <h1 className="font-bold text-2xl mx-10">{title}</h1>
      <div className="p-5 m-5 ">
        {menuItems.map((category) => (
          <RestaurantCategory category={category} />
        ))}
      </div>
    </div>
  );
}
export default Restaurant;
