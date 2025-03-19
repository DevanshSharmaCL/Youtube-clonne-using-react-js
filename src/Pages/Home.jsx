import React, { useEffect } from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import { useDispatch, useSelector } from 'react-redux'; // Corrected hooks import
import { getHomePageVideos } from '../Store/reducers/getHomePageVideos'; // Correct path
import Spinner from '../Components/Spinner'; // Fixed import (adjust path and capitalization)
import InfiniteScroll from 'react-infinite-scroll-component'; // Fixed import
import Card from '../Components/Card'; // Fixed import (adjust path and capitalization)

const Home = () => {
    const dispatch = useDispatch(); // Corrected from useAppDispatch
    const videos = useSelector((state) => state.youtube.videos); // Corrected state path

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
                    hasMore={!!useSelector((state) => state.youtube.nextPageToken)}
                    loader={<Spinner />}
                    height="92.5vh"
                    className="w-full overflow-auto"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {videos.map((video) => (
                            <Card key={video.id} video={video} />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default Home;