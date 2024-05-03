import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className='relative -mt-52 z-20'>
      <MovieList title= "NOW PLAYING" movies={movies.nowPlaying}/>
      <MovieList title= "TRENDING" movies={movies.popularMovies}/>
      <MovieList title= "MOST WATCHED" movies={movies.nowPlaying}/>
      <MovieList title= "HORROR" movies={movies.nowPlaying}/>
      <MovieList title= "COMEDY" movies={movies.nowPlaying}/>
    </div>
  )
}

export default SecondaryContainer
