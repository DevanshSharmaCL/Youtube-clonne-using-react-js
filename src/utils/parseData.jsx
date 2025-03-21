// src/utils/ParseData.jsx
import axios from 'axios';
import { parseVideoDuration } from './parseVideoDuration'; // Adjust case if needed
import { convertRawToString } from './convertRawToString'; // Assuming this exists
import { timeSince } from './timeSince'; // Import from separate file

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // Fixed from ProcessingInstruction

// src/utils/ParseData.jsx (snippet)
const parseData = async (items) => {
  try {
      const videoIds = [];
      const channelIds = [];

      items.forEach((item) => {
          channelIds.push(item.snippet.channelId);
          videoIds.push(item.id.videoId); // Works with /search endpoint
      });
      // Rest of your code (fetching channel and video details) remains the same

        const {
            data: { items: channelsData },
        } = await axios.get(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(',')}&key=${API_KEY}`
        ); // Removed redundant &id=

        const parsedChannelsData = []; // Fixed typo in variable name
        channelsData.forEach((channel) =>
            parsedChannelsData.push({
                id: channel.id,
                image: channel.snippet.thumbnails.default.url, // Fixed typo from dafault
            })
        );

        const {
            data: { items: videosData },
        } = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`
        ); // Added contentDetails for duration

        const parsedData = [];
        items.forEach((item, index) => {
            const { image: channelImage } = parsedChannelsData.find(
                (data) => data.id === item.snippet.channelId
            ); // Fixed typo from items to item
            if (channelImage) {
                parsedData.push({
                    videoId: item.id.videoId, // Fixed from videosId
                    videoTitle: item.snippet.title,
                    videoDescription: item.snippet.description,
                    videoThumbnail: item.snippet.thumbnails.medium.url,
                    videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                    videoDuration: parseVideoDuration(videosData[index].contentDetails.duration), // Fixed typo from contantDetails
                    viewCount: videosData[index].statistics.viewCount,
                    videoAge: timeSince(new Date(item.snippet.publishedAt)), // Uses imported timeSince
                    channelInfo: {
                        id: item.snippet.channelId,
                        image: channelImage,
                        name: item.snippet.channelTitle,
                    },
                });
            }
        });

        return parsedData;
    } catch (err) {
        console.error("Error parsing YouTube data:", err);
        return []; // Added fallback return
    }
};

export default parseData;