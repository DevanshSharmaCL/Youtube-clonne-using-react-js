// src/Pages/Home.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHomePageVideos } from '../Store/reducers/getHomePageVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Components/Card';
import Spinner from '../Components/Spinner';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';

const Home = () => {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.youtube.videos || []);
    const hasMore = useSelector((state) => !!state.youtube.nextPageToken);

    useEffect(() => {
        console.log('Dispatching getHomePageVideos');
        dispatch(getHomePageVideos(false));
    }, [dispatch]);

    console.log('Videos:', videos);
    console.log('HasMore:', hasMore);

    return (
        <div className="max-h-screen overflow-hidden bg-gray-900">
            <div style={{ height: "7.5vh" }}>
                <NavBar />
            </div>
            <div className="flex" style={{ height: "92.5vh" }}>
                <SideBar />
                <InfiniteScroll
                    dataLength={videos.length}
                    next={() => {
                        console.log('Fetching next page');
                        dispatch(getHomePageVideos(true));
                    }}
                    hasMore={hasMore}
                    loader={<Spinner />}
                    height="92.5vh"
                    className="w-full overflow-auto"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {videos.length > 0 ? (
                            videos.map((video) => (
                                <Card key={video.videoId} data={video} />
                            ))
                        ) : (
                            <p className="text-white">No videos loaded yet</p>
                        )}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default Home;