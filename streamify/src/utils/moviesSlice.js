import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying: null,
        popularMovies: null,
        addTrailer:null
    },
    reducers:{
        addNowPlaying: (state,action) =>{
            state.nowPlaying = action.payload;
        },
        popularMovies: (state,action) =>{
            state.popularMovies = action.payload;
        },
        addTrailer:(state,action) =>{
            state.addTrailer = action.payload;
        }
    }
})

export const {addNowPlaying,addTrailer,popularMovies} = movieSlice.actions;
export default movieSlice.reducer;