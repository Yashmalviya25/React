import CDN_LINK from "../utils/constants";
const RestroCard = (props) => {
    const { restroData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
      restroData?.info || {};
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="card-logo"
          src={
            CDN_LINK +
            cloudinaryImageId
          }
          alt=""
        />
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating + "stars"}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime + " mins"}</h4>
      </div>
    );
  };
  
  export default RestroCard;