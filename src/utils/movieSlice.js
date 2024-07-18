import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        NowPlayingMovies:null,
        MovieClips: null,
        PopularMovies : null,
        GPTRecommendedMoviesNames :null,
        GPTRecommendedMoviesData : null,
    },
    reducers:{
        addNowPlayingMovies : (state,action) => {
            state.NowPlayingMovies = action.payload
        },
        addMovieClips : (state,action) => {
            state.MovieClips= action.payload;
        },
        addPopularMovies : (state,action) => {
            state.PopularMovies = action.payload;
        },
        addGPTRecommendedMoviesData: (state,action) =>{
            state.GPTRecommendedMoviesData = action.payload;
        },
        addGPTRecommendedMoviesNames : (state,action) => {
            state.GPTRecommendedMoviesNames = action.payload;
        }
    }
});
export const {addNowPlayingMovies, addMovieClips, addPopularMovies , addGPTRecommendedMoviesData , addGPTRecommendedMoviesNames} = movieSlice.actions;
export default movieSlice.reducer;