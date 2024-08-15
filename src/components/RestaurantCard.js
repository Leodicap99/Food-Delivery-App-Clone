import { useNavigate } from "react-router";
import { IMG_URL } from "../utils/apiDetails";

function RestaurantCard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("/restaurant/" + props.resDetails.info.id);
    navigate("/restaurant/" + props.resDetails.info.id);
  };
  return (
    <div className="m-4 p-4 bg-gray-100 w-64 rounded-lg hover:bg-gray-200" onClick={handleClick}>
      <img
        src={IMG_URL + props.resDetails.info.cloudinaryImageId}
        alt="card image"
        className="w-52 rounded-lg h-48 ml-3"
      ></img>
      <div className="m-4">
        <h3>{props.resDetails.info.name}</h3>
        <h4 className="bg-green-300 w-24">{props.resDetails.info.avgRating} stars ★</h4>
        <h4>{props.resDetails.info.sla.deliveryTime} mins</h4>
        <h4>{props.resDetails.info.costForTwo} mins</h4>
      </div>
    </div>
  );
}
export default RestaurantCard;
