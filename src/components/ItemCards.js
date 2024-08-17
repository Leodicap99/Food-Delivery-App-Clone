import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/apiDetails";
import { addItem,removeItem } from "../redux/cartSlice";
import { useState } from "react";
function ItemCards({ items, cartToggle }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((store)=>store.cart.items);
  const [addNumber,setAddNumber] = useState(0);
  const handleAddItems=()=>{
    dispatch(addItem(items));
    setAddNumber(prev=>prev+1);
  }
  const handleDecrement = () =>{
    const removeIndex = cartItems.findIndex((item) => item===items);
    dispatch(removeItem(removeIndex));
    setAddNumber(prev=>prev-1);
  }
  return (
    <div
      key={items.id}
      className="flex justify-between  border-l-black border-b-2   hover:bg-slate-50 p-5"
    >
      <div className="w-2/3 m-5 p-5 flex  items-start flex-col border- mb-3  flex-wrap">
        <h4 className="font-bold">{items.name}</h4>
        <h4>
          {" ₹"}
          {items.price ? items.price / 100 : items.defaultPrice / 100}
        </h4>
        <h4>{items.description}</h4>
      </div>
      <div className="relative ">
        {cartToggle === false && (
          <img
            src={IMG_URL + items.imageId}
            className="w-32 h-32 object-cover"
          ></img>
        )}
        {cartToggle === false && addNumber === 0 && (
          <button
            className="w-20 border-solid border-2 bg-green-50 p-2 rounded-xl absolute bottom-2 left-6 text-green-950 border-green-500 "
            onClick={handleAddItems}
          >
            Add
          </button>
        )}
        {cartToggle === false && addNumber > 0 && (
          <div className="flex items-center absolute bottom-2 left-6">
            <button
              onClick={handleDecrement}
              className="px-2 py-1 bg-gray-200 text-gray-700 rounded-l-md transition-transform duration-200"
            >
              -
            </button>
            <div className="px-4 py-2 bg-white text-green-500 font-semibold text-lg transition-all duration-300 transform-gpu">
              {addNumber}
            </div>
            <button
              onClick={handleAddItems}
              className="px-2 py-1 bg-gray-200 text-gray-700 rounded-r-md transition-transform duration-200"
            >
              +
            </button>
          </div>
        )}
      </div>
      {cartToggle === true && (
        <button
          className="border-2 h-1/5 my-10 bg-red-500 rounded-lg text-white p-3"
          onClick={handleDecrement}
        >
          Remove
        </button>
      )}
    </div>
  );
}
export default ItemCards;
