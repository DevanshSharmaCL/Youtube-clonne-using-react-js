// src/utils/ParseData.jsx
import axios from 'axios';
import { parseVideoDuration } from './parseVideoDuration';
import { timeSince } from './timeSince';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const parseData = async (items) => {
    try {
        const videoIds = [];
        const channelIds = [];

        items.forEach((item) => {
            channelIds.push(item.snippet.channelId);
            videoIds.push(item.id.videoId);
        });

        const { data: { items: channelsData } } = await axios.get(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(',')}&key=${API_KEY}`
        );

        const parsedChannelsData = channelsData.map(channel => ({
            id: channel.id,
            image: channel.snippet.thumbnails.default.url,
        }));

        const { data: { items: videosData } } = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`
        );

        const parsedData = items.map((item, index) => {
            const channelInfo = parsedChannelsData.find(data => data.id === item.snippet.channelId);
            if (channelInfo) {
                const videoDetails = videosData[index];
                return {
                    videoId: item.id.videoId,
                    videoTitle: item.snippet.title,
                    videoDescription: item.snippet.description,
                    videoThumbnail: item.snippet.thumbnails.medium.url,
                    videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                    videoDuration: parseVideoDuration(videoDetails.contentDetails.duration),
                    viewCount: videoDetails.statistics.viewCount,
                    videoAge: timeSince(new Date(item.snippet.publishedAt)),
                    channelInfo: {
                        id: item.snippet.channelId,
                        image: channelInfo.image,
                        name: item.snippet.channelTitle,
                    },
                };
            }
            return null; // Fallback if channel info is missing
        }).filter(Boolean); // Remove null entries

        console.log('Parsed Data:', parsedData); // Debug
        return parsedData;
    } catch (err) {
        console.error("Error parsing YouTube data:", err);
        return [];
    }
};

export default parseData;