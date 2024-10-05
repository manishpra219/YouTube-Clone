import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import { value_converter } from '../../data';
import { API_KEY } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';

const PlayVideo = () => {
  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  // Fetching video data
  const fetchvideoData = async () => {
    try {
      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      const res = await fetch(videoDetails_url);
      const data = await res.json();
      if (data.items && data.items.length > 0) {
        setApiData(data.items[0]);
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  // Fetching channel and comment data
  const fetchotherData = async () => {
    if (!apiData) return;

    try {
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      const channelRes = await fetch(channelData_url);
      const channelData = await channelRes.json();
      setChannelData(channelData.items[0]);

      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
      const commentRes = await fetch(comment_url);
      const commentData = await commentRes.json();
      setCommentData(commentData.items);
    } catch (error) {
      console.error("Error fetching additional data:", error);
    }
  };

  // Fetch video data when videoId changes
  useEffect(() => {
    fetchvideoData();
  }, [videoId]);

  // Fetch additional data when apiData is available
  useEffect(() => {
    if (apiData) {
      fetchotherData();
    }
  }, [apiData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; encrypted-media"
      ></iframe>

      <h3>{apiData?.snippet?.title || 'Title here'}</h3>
      <p>
        {apiData?.statistics?.viewCount ? value_converter(apiData.statistics.viewCount) : "16K"} Views &bull; 
        {apiData?.snippet?.publishedAt ? moment(apiData.snippet.publishedAt).fromNow() : ""}
      </p>

      <div className="play-video-info">
        <div>
          <span>
            <img src={like} alt="Like" /> {apiData?.statistics?.likeCount ? value_converter(apiData.statistics.likeCount) : 155}
          </span>

          <span>
            <img src={dislike} alt="Dislike" /> 2
          </span>

          <span>
            <img src={share} alt="Share" /> Share
          </span>

          <span>
            <img src={save} alt="Save" /> Save
          </span>
        </div>

        <hr />

        <div className="publisher">
          <img src={channelData?.snippet?.thumbnails?.default?.url || ''} alt="Channel" />
          <div>
            <p>{apiData?.snippet?.channelTitle || ''}</p>
            <span>{channelData?.statistics?.subscriberCount ? value_converter(channelData.statistics.subscriberCount) : "1M"} Subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>

        <div className="vid-description">
          <p>{apiData?.snippet?.description?.slice(0, 250) || 'Description Here'}</p>
          <hr />

          <h4>{apiData?.statistics?.commentCount ? value_converter(apiData.statistics.commentCount) : 102} Comments</h4>

          {commentData.map((item, index) => (
            <div key={index} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="Profile" />

              <h3>
                {item.snippet.topLevelComment.snippet.authorDisplayName}{' '}
                <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
              </h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>

              <div className="comment-action">
                <img src={like} alt="Like" />
                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="Dislike" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
