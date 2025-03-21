// src/Store/reducers/getHomePageVideos.jsx
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseData from "../../utils/ParseData";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCWv7vMbMWH4-V0ZXdmDpPBA"; // Mosh's channel

export const getHomePageVideos = createAsyncThunk(
    "youtube/getHomePageVideos",
    async (isNext, { getState }) => {
        const {
            youtube: { nextPageToken: nextPageTokenFromState, videos },
        } = getState();

        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=8&order=date&pageToken=${isNext ? nextPageTokenFromState : ""}&key=${API_KEY}`
        );
        console.log('API Response:', response.data); // Debug
        const items = response.data.items;
        const parsedVideos = await parseData(items);

        return {
            videos: isNext ? [...videos, ...parsedVideos] : parsedVideos,
            nextPageToken: response.data.nextPageToken || null,
        };
    }
);