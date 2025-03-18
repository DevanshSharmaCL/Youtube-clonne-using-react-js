import { configureStore } from '@reduxjs/toolkit'
import YoutubeSlice from '../Features/Youtuber/YoutubeSlice';

export const store = configureStore({
    reducer: {
        YoutubeSlice: youtubeReducer,
    },
  })

  export default store;