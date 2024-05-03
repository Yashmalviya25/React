import { useEffect } from "react";
import { API_OPTIONS, GET_POPULAR_MOVIES } from "../utils/constants";
import { popularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispath = useDispatch();
  const getPopularMovies = async () => {
   try{
    const data = await fetch(GET_POPULAR_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispath(popularMovies(json.results));
   }
   catch(e){
    console.log(e)
   }
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;