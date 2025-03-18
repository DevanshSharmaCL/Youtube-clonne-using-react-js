import {createSlice} from '@reduxjs/toolkit';


const initialState={
    video:[],
    currentPlaying:null,
    seacrhTerm:'',
    searchResult:[],
    nextPageToken:null,
    recommendedVideos:[],
};

const youtubeSlice=createSlice({
    name:'youtube',
    initialState,
    reducers:{

    }
})

export default youtubeSlice.reducer;
