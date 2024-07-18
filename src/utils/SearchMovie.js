import {SearchMovie_URL} from "../utils/constants"
const SearchMovie = async(movie) => {
    const data = await fetch(SearchMovie_URL + movie, process.env.REACT_APP_API_OPTIONS)
    const json = await data.json()
    return json.results;
}

// const getMoviesData = async (movieNames) => {
//     const movies = movieNames.split(",");
//     const data = movies.map((movie) => SearchMovie(movie));
    
//     const result = await Promise.all(data)
//     // console.log(result)
//     return result
// }

export default SearchMovie;