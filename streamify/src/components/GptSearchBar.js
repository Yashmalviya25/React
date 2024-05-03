import React from "react";
import lang from "../utils/languageConstants";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const handleLanguage = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }
  const langKey = useSelector((store) => store.config.lang)
  return (
    <div className="pt-[7%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-6"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
          type="text"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
        {lang[langKey]?.search }
        </button>
        <select className="p-4 m-4 col-span-3" onChange={handleLanguage} name="" id="">
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
