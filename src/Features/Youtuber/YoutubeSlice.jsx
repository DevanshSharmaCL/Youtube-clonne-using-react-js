import { createSlice } from '@reduxjs/toolkit';
import { getHomePageVideos } from '../../Store/reducers/getHomePageVideos';

const initialState = {
    videos: [],             // Renamed "video" to "videos" for clarity (optional)
    currentPlaying: null,
    searchTerm: '',         // Fixed typo from "seacrhTerm"
    searchResults: [],      // Renamed "searchResult" to "searchResults" (optional)
    nextPageToken: null,
    recommendedVideos: [],
};

const youtubeSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {
        // Example reducers for a YouTube clone
        setVideos: (state, action) => {
            state.videos = action.payload;
        },
        setCurrentPlaying: (state, action) => {
            state.currentPlaying = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        setNextPageToken: (state, action) => {
            state.nextPageToken = action.payload;
        },
        setRecommendedVideos: (state, action) => {
            state.recommendedVideos = action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
            state.videos = action.payload
    })
});

export default youtubeSlice.reducer;