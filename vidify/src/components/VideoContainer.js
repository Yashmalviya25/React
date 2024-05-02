import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_KEY } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await fetch(YOUTUBE_API_KEY);
        const data = await response.json();
        setVideos(data.items || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className='flex flex-wrap'>
      {videos.map((video) => <Link  key={video.id} to = {"/watch?v=" + video.id}> <VideoCard info = {video} /></Link>)}
    </div>
  );
};

export default VideoContainer;