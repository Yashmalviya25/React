import React from "react";
import lang from "../utils/languageConstants";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
import openAi from "../utils/openAi";
import { useRef } from "react";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const langKey = useSelector((store) => store.config.lang);
  const handleSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for query " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seprated like exampe result given ahead. Example Result: Gadar, Sholey, Don, Golmal, Koi mil gaya";
    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices);
  };
  return (
    <div className="pt-[7%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-6"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
          type="text"
          ref={searchText}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          {lang[langKey]?.search}
        </button>
        <select
          className="p-4 m-4 col-span-3"
          onChange={handleLanguage}
          name=""
          id=""
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default GptSearchBar;
