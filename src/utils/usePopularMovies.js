import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { options, PopularMovies_URL } from '../utils/constants'
import { addPopularMovies } from './movieSlice'
const usePopularMovies = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const getNowPlayingMovies = async() => {
            console.log(process.env.REACT_APP_API_OPTIONS)
            let data = await fetch(PopularMovies_URL,options);
            let json = await data.json();
            // console.log(json.results)
            dispatch(addPopularMovies(json.results));
        }
        getNowPlayingMovies();
    },[dispatch])
}

export default usePopularMovies;