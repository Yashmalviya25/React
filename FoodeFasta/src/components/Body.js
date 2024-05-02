import RestroCard, { openedRestro, openedRestro } from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { MAIN_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [originalList, setOriginalList] = useState([]);
  const [listOfRestro, setListOfRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(MAIN_API);
    const json = await data.json();
    const restroDetails =
    json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants ||
    json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants ||
    json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants;
    
    setOriginalList(restroDetails);
    setListOfRestro(restroDetails);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you are offline please check your internet</h1>;

  const handleFilterTop = () => {
    const filteredData = originalList.filter(
      (restro) => restro.info.avgRating > 4.3
    );
    setListOfRestro(filteredData);
  };

  const handleFilterOff = () => {
    setListOfRestro(originalList);
  };

  const onSearch = () => {
    const filteredData = originalList.filter((restro) =>
      restro.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestro(filteredData);
  };
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const OpenedRestaurants = openedRestro(RestroCard);

  return originalList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid rounded-lg mx-2 border-black"
            value={searchText}
            onChange={handleSearch}
          />
          <button
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
            onClick={onSearch}
          >
            Search
          </button>
        </div>
        <div className="m-2 p-2">
          <button
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg m-4"
            onClick={handleFilterTop}
          >
            Top Restro
          </button>
        </div>
        <div className="m-2 p-2">
          <button
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg m-4"
            onClick={handleFilterOff}
          >
            All Restro
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {listOfRestro.map((restro) => (
          <Link key={restro.info.id} to={"/restaurants/" + restro.info.id}>
            {restro.info.isOpen ? (
              <OpenedRestaurants restroData={restro} />
            ) : (
              <RestroCard restroData={restro} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
