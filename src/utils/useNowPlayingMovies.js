
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { NowPlayingMovies_URL, options } from '../utils/constants'
const useNowPlayingMovies = () =>{

    const dispatch = useDispatch();
    useEffect(()=>{
        const getNowPlayingMovies = async() => {
            console.log(NowPlayingMovies_URL);
            let data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",options);
            let json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        }
            // console.log(json.results)
        getNowPlayingMovies();
    },[dispatch])
}

export default useNowPlayingMovies;