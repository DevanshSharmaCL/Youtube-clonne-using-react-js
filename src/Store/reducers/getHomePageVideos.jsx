import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/getHomePageVideos", // Adjusted name to match state slice
    async (isNext, { getState }) => {
        const {
            youtube: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
        } = getState();

        // Use searchTerm from state or a default query for homepage
        const query = searchTerm || "trending videos"; // Fallback to a generic query

        // Construct the API URL
        const url = `https://www.googleapis.com/youtube/v3/search?maxResults=20&q=${encodeURIComponent(query)}&key=${API_KEY}&part=snippet&type=video${
            isNext && nextPageTokenFromState ? `&pageToken=${nextPageTokenFromState}` : ""
        }`;

        try {
            const {
                data: { items, nextPageToken },
            } = await axios.get(url);

            // Parse the raw API data into a usable format
            const parsedVideos = parseData(items);

            // If fetching next page, append to existing videos; otherwise, replace them
            const updatedVideos = isNext ? [...videos, ...parsedVideos] : parsedVideos;

            // Return data to update the Redux state
            return {
                videos: updatedVideos,
                nextPageToken,
            };
        } catch (error) {
            console.error("Error fetching YouTube videos:", error);
            throw error; // Re-throw to let Redux handle the rejection
        }
    }
);