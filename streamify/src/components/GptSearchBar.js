import React from "react";
import lang from "../utils/languageConstants";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS} from "../utils/constants"
import { changeLanguage } from "../utils/configSlice";
import { addGptMovieResult } from "../utils/gptSlice";
import openAi from "../utils/openAi";
import { useRef } from "react";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const langKey = useSelector((store) => store.config.lang);
  const tmdbMovie = async(movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='
    +movie
    +'&include_adult=false&language=en-US&page=1'
    , API_OPTIONS);
    const json = await data.json();
    return json.results;

  }
  const handleSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for query " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seprated like exampe result given ahead. Example Result: Gadar, Sholey, Don, Golmal, Koi mil gaya";
    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo", 
    });

    if(!gptResults.choices) return null
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promisArray = gptMovies.map((movie) => tmdbMovie(movie));
    const tmdbResult = await Promise.all(promisArray);
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResult}))
  };
  return (
    <div className="pt-[7%] flex justify-center ">
      <form
        className=" bg-black  w-full md:w-1/2 grid grid-cols-12 mt-40 sm:mt-28 md:mt-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4  text-xs sm:text:lg md:text:3xl col-span-6"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
          type="text"
          ref={searchText}
        />
        <button
          className="col-span-3   text-xs sm:text:lg md:text:3xl m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          {lang[langKey]?.search}
        </button>
        <select
          className="p-4     text-xs sm:text:lg md:text:3xl m-4 col-span-3"
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
