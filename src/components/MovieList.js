import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='flex flex-col gap-5 pt-5'>
        <p className="text-3xl ">{title}</p>
        <div className='flex overflow-x-scroll no-scrollbar w-[100%] '>
            <div className='flex gap-5'>
            { movies?.map((movie) => <MovieCard key={movie.id} poster_path={movie.poster_path} title={movie.title} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList