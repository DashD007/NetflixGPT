import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux"
const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  // const NowPlayingMovies = movies?.NowPlayingMovies;
  return (
    <div className='bg-black'>
      <div className="-mt-40 pl-16 pb-14">
        
        <MovieList title={"Now Playing Movies"} movies={movies?.NowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies?.PopularMovies}/>
        <MovieList title={"Now Playing Movies"} movies={movies?.NowPlayingMovies}/>
        <MovieList title={"Now Playing Movies"} movies={movies?.NowPlayingMovies}/>
        <MovieList title={"Now Playing Movies"} movies={movies?.NowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer