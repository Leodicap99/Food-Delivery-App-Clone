import { useState } from "react";
import ItemCards from "./ItemCards";

function RestaurantCategory({category}){
    const [showItems,setShowItems] = useState(true);
    const handleShowitems =() =>{
        setShowItems(!showItems)
    }
    return (
      <div className="border-2 items-center shadow-lg ">
        <div className="flex justify-between items-center">
          <h1 className="p-5 font-bold text-lg">
            {category.title} ({category.itemCards.length})
          </h1>
          <span
            onClick={handleShowitems}
            className="pr-5 pb-3  font-bold hover:cursor-pointer text-2xl "
          >
            {showItems ? "˄" : "⌄"}
          </span>
        </div>
        <div className={showItems ? "block" : "hidden"}>
          {category.itemCards.map((item) => (
            <ItemCards items={item.card.info} cartToggle={false} />
          ))}
        </div>
      </div>
    );
}
export default RestaurantCategory