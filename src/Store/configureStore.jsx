// src/Store/configureStore.jsx
import { configureStore } from '@reduxjs/toolkit';
import youtubeReducer from '../Features/Youtuber/YoutubeSlice'; // Path matches your structure

export const store = configureStore({
    reducer: {
        youtube: youtubeReducer, // Matches state.youtube
    },
});

export default store;