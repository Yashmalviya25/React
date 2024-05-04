import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);
  if (movies === null) return;
  const mainMovie = movies[0];
  const {id} =  mainMovie;
  return (
    <div className="">
      <VideoBackground  movieId = {id} />
    </div>
  );
};

export default MainContainer;
