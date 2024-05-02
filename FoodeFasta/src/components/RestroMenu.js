import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatogory from "./RestaurantCategory";
import { useState } from "react";

const RestroMenu = () => {
  const { resId } = useParams();
  const getData = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(null);

  if (getData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    getData?.cards[2]?.card?.card?.info;
  const itemCards =
    (
      getData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card ||
      getData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card ||
      []
    ).itemCards || [];
  const categories =
    getData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className=" font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category,index) =>(
        <RestaurantCatogory data={category?.card?.card} setShowIndex = {() =>{
          setShowIndex(index)
        }} showItems = {index === showIndex && true} key={category?.card?.card?.title}/>
      ))}

    </div>
  );
};
export default RestroMenu;
