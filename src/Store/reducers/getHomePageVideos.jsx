import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ParseData from "../../utils/ParseData"; // Changed to default import

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/getHomePageVideos",
    async (isNext, { getState }) => {
        const {
            youtube: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
        } = getState();

        const query = searchTerm || "trending videos";

        const url = `https://www.googleapis.com/youtube/v3/search?maxResults=20&q=${encodeURIComponent(query)}&key=${API_KEY}&part=snippet&type=video${
            isNext && nextPageTokenFromState ? `&pageToken=${nextPageTokenFromState}` : ""
        }`;

        try {
            const {
                data: { items, nextPageToken },
            } = await axios.get(url);

            const parsedVideos = ParseData(items); // Now correctly uses default import
            const updatedVideos = isNext ? [...videos, ...parsedVideos] : parsedVideos;

            return {
                videos: updatedVideos,
                nextPageToken,
            };
        } catch (error) {
            console.error("Error fetching YouTube videos:", error);
            throw error;
        }
    }
);