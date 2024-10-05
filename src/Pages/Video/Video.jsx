import React from 'react';
import { useParams } from 'react-router-dom';  // Import useParams hook
import './Video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';

const Video = () => {
  const { videoId, categoryId } = useParams();  // Get videoId and categoryId from URL params

  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default Video;
