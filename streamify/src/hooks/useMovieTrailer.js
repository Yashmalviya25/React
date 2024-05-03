import { useEffect } from "react";
import { API_OPTIONS, GET_MOVIE_TRAILER } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const formattedMessage = GET_MOVIE_TRAILER.replace("{id}", movieId);
    const data = await fetch(formattedMessage, API_OPTIONS);
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer =
      filterData.length > 1
        ? filterData.filter((final) => final.name === "Official Trailer")[0]
        : filterData[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
