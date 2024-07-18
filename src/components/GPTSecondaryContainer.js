import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"
const GPTSecondaryContainer = () => {
    const data = useSelector(store => store.movies);
    
    const movieNames = data?.GPTRecommendedMoviesNames?.split(", ");
    const moviesData = data?.GPTRecommendedMoviesData;
  return moviesData ?(
    <div className=" w-[100%] text-white pl-10">
        <div className="-mt-64">
          <p className="text-4xl ">Search Result: </p>
          {movieNames?.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={moviesData[index]}/>)}
        </div>
    </div>
  ) : null
}

export default GPTSecondaryContainer