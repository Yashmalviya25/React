import logo from "../public/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  console.log(searchQuery);

  const searchCache = useSelector((store) => store.search);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      console.log(json[1]);
      setSuggestions(json[1]);

      // update cache
      dispatch(cacheResults({
        [searchQuery]: json[1],
      }))
    } catch (e) {
      console.log(e);
    }
  };

  const toggleMenueHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col px-5 mx-2 shadow-lg">
      <div className="flex clol-span-1">
        <img
          className="w-[100px] cursor-pointer mt-2 h-[82px]"
          onClick={() => {
            toggleMenueHandler();
          }}
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          alt=""
        />
        <img className="w-[100px]" alt="main-logo" src={logo} />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 h-[40px] border  px-5 border-gray-400 mt-7 py-2   rounded-l-full "
            type="text"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border h-[40px] border-gray-400 bg-gray-200 px-5 py-3 rounded-r-full">
            <CiSearch />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute pl-5 bg-white py-2  border  shadow-lg rounded-lg w-96">
            <ul>
              {suggestions.map((suggest) => (
                <li className="flex py-2 px-2 hover:bg-gray-200 " key={suggest}>
                  <CiSearch className="mx-2" /> {suggest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="w-[100px]"
          src="data:image/png;base64,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"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
