import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-black">
      <h1 className="text-3xl text-white py-4">{title.toUpperCase()}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies &&
            movies.map(movie => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;