import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice";
import { CDN_LINK } from "../utils/constants";
const ItemList = ({ items }) => {
  
  const dispatch = useDispatch();
  const handleAddItem = (item) =>{
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.key}
          className="m-2 p-2 border-b-2 flex border-slate-300 justify-between text-left"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs"> {item.card.info.description}</p>
          </div>
          <div className=" border-2 border-slate-300 shadow-lg min-h-[98px] max-w-[120px]">
            <div className="absolute">
              <button onClick={() => handleAddItem(item)} className="p-2 mx-7   rounded-lg bg-black bg-opacity-80 text-white shadow-lg ">
                ADD+
              </button>
            </div>
            <img src={CDN_LINK + item.card.info.imageId} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
