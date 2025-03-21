// src/Components/Card.jsx
import React from 'react';
import { convertRawToString } from '../utils/convertRawToString';

export default function Card({ data }) {
    console.log('Card Data:', data); // Debug

    if (!data) return null; // Prevent rendering if data is missing

    return (
        <div className="w-64 flex flex-col gap-2">
            {/* Thumbnail */}
            <div className="relative">
                <a href={data.videoLink} target="_blank" rel="noopener noreferrer">
                    <img
                        src={data.videoThumbnail}
                        alt={data.videoTitle}
                        className="w-64 h-36 object-cover rounded-lg"
                    />
                    <span className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
                        {data.videoDuration}
                    </span>
                </a>
            </div>
            {/* Info */}
            <div className="flex gap-2">
                <div className="flex-shrink-0">
                    <a href={`https://www.youtube.com/channel/${data.channelInfo.id}`} target="_blank" rel="noopener noreferrer">
                        <img
                            src={data.channelInfo.image}
                            alt={data.channelInfo.name}
                            className="w-9 h-9 rounded-full"
                        />
                    </a>
                </div>
                <div>
                    <h3>
                        <a
                            href={data.videoLink}
                            className="text-sm font-medium text-white line-clamp-2 hover:text-gray-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.videoTitle}
                        </a>
                    </h3>
                    <div className="text-xs text-gray-400">
                        <a
                            href={`https://www.youtube.com/channel/${data.channelInfo.id}`}
                            className="hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.channelInfo.name}
                        </a>
                        <div>
                            {convertRawToString(data.viewCount)} views • {data.videoAge}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}