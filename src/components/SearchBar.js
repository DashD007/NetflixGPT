import React from 'react'
import { useRef,useState } from 'react'
import RecommendedMovies from './RecommendedMovies';
import { useDispatch } from 'react-redux';
import { addGPTRecommendedMoviesNames } from "../utils/movieSlice";
import {useSelector} from "react-redux";
import { TailSpin } from 'react-loader-spinner'
const SearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const result = useSelector(store => store.movies.GPTRecommendedMoviesNames)
  const [clicked,setClicked] = useState(false);
  const handleOnClickGPT = async (event) => {
    if(event.detail === 1){
      if(searchText.current.value){
        setClicked(true)
        dispatch(addGPTRecommendedMoviesNames(null))
        // console.log("button is clicked")
        const result = await RecommendedMovies(searchText.current.value)
        dispatch(addGPTRecommendedMoviesNames(result));
      }
    }
    // if(!result){
      
    // }
  }
  return (
    <div className='flex flex-col gap-14 items-center'>
      <div className="flex gap-5 justify-center pt-[80px] w-[100%] ">
        <input type="text"  ref={searchText} className="bg-opacity-75 border-2 text-black border-black rounded-md w-[40%] text-lg px-3 py-2 placeholder-black focus:border-black focus:outline-none focus:ring-0" placeholder='What do you want to watch today? For eg. Horror Indian retro movie'/>
        <button className="text-white border-none text-md bg-red-600 px-6 py-3 rounded-md" onClick={(event)=> handleOnClickGPT(event)}>Search</button>
      </div>
      {(clicked && !result) && 
      <div className="">
       <TailSpin visible={true} height="80"  width="80" color="#fff" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass=""/>
      </div>}
    </div>
  )
}

export default SearchBar