import RestroCard from "./RestroCard";
import apiData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState(apiData);
  return (
    <div className="body">
      <div className="filter">
        <div className="filter-top">
          <button
            className="filter-top-btn"
            onClick={() => {
              const filteredData = listOfRestro.filter(
                (restro) => restro.info.avgRating > 4.5
              );
              setListOfRestro(filteredData);
            }}
          >
            Top Restro
          </button>
        </div>
        <div className="filter-off">
          <button
            className="filter-off-btn"
            onClick={() => {
              setListOfRestro(apiData);
            }}
          >
            All Restro
          </button>
        </div>
      </div>

      <div className="restro-container">
        {listOfRestro.map((restro) => (
          <RestroCard key={restro.info.id} restroData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
