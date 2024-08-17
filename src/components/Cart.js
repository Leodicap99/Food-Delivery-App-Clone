import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearItems, removeItem } from "../redux/cartSlice";

function Cart(){
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearItems());
    }
    return (
        <div className="m-4 p-4 text-center">
            <h1 className="font-bold text-xl">Cart Items</h1>
            <button className="border-2 bg-slate-400 rounded-lg text-white p-3 m-3" onClick={handleClearCart}>Clear Cart</button>
            {
                cartItems.map((item)=><ItemCards items={item} cartToggle={true}/>)
            }
        </div>
    )
}
export default Cart;