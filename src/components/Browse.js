import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../utils/useNowPlayingMovies'
import usePopularMovies from "../utils/usePopularMovies"
const Browse = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  window.addEventListener("beforeunload",(event)=>{
    if(user){
      event.preventDefault();
      event.returnValue = ""
      navigate("/browse")
    }
  })
  const movies = useSelector((store)=>store.movies);
  
  useNowPlayingMovies();
  usePopularMovies();
  useEffect(()=>{
    if(!user){
      navigate("/");
      return ;
    }
  },[user,navigate])
  
  const NowPlayingMovies = movies?.NowPlayingMovies;
  if (!NowPlayingMovies) return

  const HitMovie = NowPlayingMovies.reduce((acc, movie) => {
    return Math.max.apply(null, [acc.popularity, movie.popularity]) === movie.popularity ? movie : acc;
  }, NowPlayingMovies[0])


  return(
    <div className="bg-cover bg-center h-[100vh] min-w-[1000px] w-[100%]">
      <Header/>
      <div className="text-white">
        
        <MainContainer movie={HitMovie}/>
        <SecondaryContainer/>
      </div>
    </div>
  )
}

export default Browse