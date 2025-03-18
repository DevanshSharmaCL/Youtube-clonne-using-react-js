import { configureStore } from '@reduxjs/toolkit';
import YoutubeSlice from '../Features/Youtuber/YoutubeSlice';

// Export the store with the correct reducer
export const store = configureStore({
    reducer: {
        youtube: YoutubeSlice.reducer, // Use the reducer from the YoutubeSlice
    },
});

export default store;