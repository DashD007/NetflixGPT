import React from 'react'
import { IMAGE_URL } from '../utils/constants'
const MovieCard = ({poster_path}) => {
  return poster_path? (
    <div className='w-48 flex items-stretch rounded-md'>
        <img src={IMAGE_URL+poster_path} alt="movie logo" className='rounded-md'/>
    </div>
  ) : null
}

export default MovieCard