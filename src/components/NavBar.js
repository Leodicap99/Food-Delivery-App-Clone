import { useState } from "react";
import { useNavigate } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

function NavBar() {
const [login,setLogin] = useState('Logout');
const navigate = useNavigate();
const cartItems = useSelector((store)=>store.cart.items);
console.log(cartItems);
const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between  shadow-lg">
      <div className="logo-container">
        <img
          src="https://images-platform.99static.com/PqkxPzdIGHYlwJzMzFSLbWCaI0g=/0x0:1181x1181/500x500/top/smart/99designs-contests-attachments/134/134197/attachment_134197839"
          className="w-36 "
        ></img>
      </div>
      <div>
        <ul className="flex p-4 m-10 gap-5 ">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li onClick={() => navigate("/")} className="cursor-pointer">Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li className="hover: cursor-pointer" onClick={() => navigate("/cart")}>Cart({cartItems.length})</li>
          <li>
            <button
              onClick={() =>
                setLogin((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;