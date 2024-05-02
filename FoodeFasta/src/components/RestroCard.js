import { CDN_LINK } from "../utils/constants";
const RestroCard = (props) => {
  const { restroData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    restroData?.info || {};
  return (
    <div className="m-4 p-4 w-[280px] rounded-lg bg-slate-100 hover:bg-slate-200">
      <img className="rounded-lg" src={CDN_LINK + cloudinaryImageId} alt="" />
      <h3 className="font-bold py-4 text-lg">{name}</h3>

      <div className="flex">
        <p>{avgRating + "stars"} .</p>
        <p> {sla?.deliveryTime + " mins"}</p>
      </div>
      <p className="text-sm">{cuisines?.join(", ")}</p>
    </div>
  );
};

export const openedRestro = (RestroCard) => {
  return (props) => {
    return(
      <div className="open">
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Opened</label>
      <RestroCard {...props} />
    </div>
    );
  };
};

export default RestroCard;
