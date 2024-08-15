import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimmerRestaurant from "../Shimmer/Shimmer-Restaurant";
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
    let index = 0,
      res = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    for (let i = 0; i < res.length; i++) {
      if (res[i]?.card?.card?.itemCards) {
        index = i;
        break;
      }
    }
    console.log(res[index]);
    console.log(res[index]);
    setMenuItems(res[index].card.card.itemCards);
    setTitle(data.data.cards[0].card.card.text);
  }
  return loading?<ShimmerRestaurant />:(
    <div className="m-4 p-4">
      <h1 className="font-bold text-2xl my-4">{title}</h1>
      <div className="p-5 m-5 ">
        {menuItems.map((restaurant) => (
          <div
            key={restaurant.card.info.id}
            className="flex w-4/6 border-l-black border-2 justify-between mb-3 hover:bg-slate-50"
          >
            <div className=" m-5 p-5 flex  items-start flex-col border- mb-3  ">
              <h4 className="font-bold">{restaurant.card.info.name}</h4>
              <h4>
                {" ₹"}
                {restaurant.card.info.price / 100}
              </h4>
            </div>
            <button className="m-10 h-1/5 border-solid border-2 bg-green-50 p-2 rounded-xl">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Restaurant;
