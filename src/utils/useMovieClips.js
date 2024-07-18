import { useEffect } from 'react'

import {useDispatch} from "react-redux"
import { addMovieClips } from './movieSlice'
import { options } from './constants'
const useMovieClips = (id) => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const getMovieClips = async() => {
            const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",options);
            const json = await data.json();
            dispatch(addMovieClips(json?.results))
        }
        getMovieClips();
    },[dispatch,id])
}
export default useMovieClips;