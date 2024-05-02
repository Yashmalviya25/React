import { FaAngleDoubleDown } from "react-icons/fa";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCatogory = ({ data,showItems,setShowIndex }) => {
    const handleClick = () =>{
        setShowIndex();
    }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4  bg-slate-100 shadow-lg p-4 border-2">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <FaAngleDoubleDown />
          </span>
        </div>
        <div>
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default RestaurantCatogory;
