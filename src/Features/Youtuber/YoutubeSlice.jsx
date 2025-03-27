// src/Features/Youtuber/YoutubeSlice.jsx
import { createSlice } from '@reduxjs/toolkit';
import { getHomePageVideos } from '../../Store/reducers/getHomePageVideos'; // Should work, but let’s verify

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: '',
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
};;;;;

const youtubeSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {
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
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
            if (action.payload && action.payload.videos) {
                state.videos = action.payload.videos;
                state.nextPageToken = action.payload.nextPageToken;
            }
        });
    },
});

export const { 
    setVideos, 
    setCurrentPlaying, 
    setSearchTerm, 
    setSearchResults, 
    setNextPageToken, 
    setRecommendedVideos 
} = youtubeSlice.actions;

export default youtubeSlice.reducer;