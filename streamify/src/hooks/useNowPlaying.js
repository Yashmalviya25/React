import { useEffect } from "react";
import { API_OPTIONS, GET_NOW_PLAYING } from "../utils/constants";
import { addNowPlaying } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlaying = () => {
  const dispath = useDispatch();
  const getNowPlayingMovies = async () => {
   try{
    const data = await fetch(GET_NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    dispath(addNowPlaying(json.results));
   }
   catch(e){
    console.log(e)
   }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;