function RestaurantCard(props) {

  return (
    <div className="card-container">
      <img
        src={props.resDetails.info.image.url}
        alt="card image"
        className="card-image"
      ></img>
      <h3>{props.resDetails.info.name}</h3>
      <h4>{props.resDetails.info.rating.aggregate_rating} stars</h4>
      <h4>{props.resDetails.order.deliveryTime}</h4>
    </div>
  );
}
export default RestaurantCard;