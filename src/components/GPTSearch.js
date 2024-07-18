import React from 'react'
import SearchBar from './SearchBar'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import SearchMovie from '../utils/SearchMovie'
import { BACKGROUND_URL } from "../utils/constants";
import { useDispatch } from 'react-redux'
import { addGPTRecommendedMoviesData } from '../utils/movieSlice'
import Header from './Header';
import GPTSecondaryContainer from './GPTSecondaryContainer';
import { useNavigate } from 'react-router-dom'
const GPTSearch = () => {
  const user = useSelector((store)=> store.user)
  const navigate = useNavigate();
  useEffect(()=>{
    if(!user){
      navigate("/");
      return ;
    }
  },[user,navigate])
  const dispatch = useDispatch();
  const movies = useSelector((store)=> store.movies.GPTRecommendedMoviesNames)
  
  const getMoviesData = async (movieNames) => {
    const movies = movieNames.split(",");
    const data = movies?.map((movie) => SearchMovie(movie));
    
    const result = await Promise.all(data)
    dispatch(addGPTRecommendedMoviesData(result));
  }
  if(movies) {getMoviesData(movies)};
  return (
    <div className="bg-black pb-16">
      <div className=" w-[100%] h-[100vh] min-h-[100vh] text-white pt-14 bg-no-repeat bg-center bg-cover bg-gradient-to-b from-black" style={{backgroundImage:`url(${BACKGROUND_URL})`,}}>
        <Header/>
        <SearchBar/>
      </div>
      <GPTSecondaryContainer/>
    </div>
  )
}

export default GPTSearch