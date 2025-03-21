// src/Pages/Home.jsx
import React, { useEffect } from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getHomePageVideos } from '../Store/reducers/getHomePageVideos';
import Spinner from '../Components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Components/Card';

const Home = () => {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.youtube.videos || []); // Fallback to empty array
    const hasMore = useSelector((state) => !!state.youtube.nextPageToken);

    useEffect(() => {
        dispatch(getHomePageVideos(false));
    }, [dispatch]);

    return (
        <div className="max-h-screen overflow-hidden">
            <div style={{ height: "7.5vh" }}>
                <NavBar />
            </div>
            <div className="flex" style={{ height: "92.5vh" }}>
                <SideBar />
                <InfiniteScroll
                    dataLength={videos.length}
                    next={() => dispatch(getHomePageVideos(true))}
                    hasMore={hasMore}
                    loader={<Spinner />}
                    height="92.5vh"
                    className="w-full overflow-auto"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {videos.map((video) => (
                            <Card key={video.videoId} video={video} /> // Updated key to videoId
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default Home;