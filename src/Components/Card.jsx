// src/Components/Card.jsx
import React from 'react';

export default function Card({ data }) {
    return (
        <div className="w-64 flex flex-col gap-3">
            <div className="relative">
                <a href={data.videoLink || '#'}>
                    <img
                        src={data.videoThumbnail}
                        alt="Thumbnail"
                        className="w-64 h-36 object-cover rounded-lg hover:shadow-lg transition-shadow duration-200"
                    />
                    <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                        {data.videoDuration}
                    </span>
                </a>
            </div>
            <div className="flex gap-2">
                <div className="flex-shrink-0">
                    <a href={data.channelInfo.link || '#'}>
                        <img
                            src={data.channelInfo.image}
                            alt="Channel avatar"
                            className="w-9 h-9 rounded-full object-cover"
                        />
                    </a>
                </div>
                <div className="flex-1">
                    <h3>
                        <a
                            href={data.videoLink || '#'}
                            className="text-sm font-medium text-white line-clamp-2 hover:text-gray-300"
                        >
                            {data.videoTitle}
                        </a>
                    </h3>
                    <div className="text-xs text-gray-400">
                        <div>
                            <a
                                href={data.channelInfo.link || '#'}
                                className="hover:text-white"
                            >
                                {data.channelInfo.name}
                            </a>
                        </div>
                        <div>
                            {data.viewCount} views • {data.videoAge}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}