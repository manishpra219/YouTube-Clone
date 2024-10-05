import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      const res = await fetch(relatedVideo_url);
      const data = await res.json();

      if (data.items) {
        setApiData(data.items);
      } else {
        setError("No related videos found.");
      }
    } catch (err) {
      setError("Failed to fetch related videos.");
      console.error("Error fetching data: ", err);
    }
  };

  useEffect(() => {
    if (categoryId) {
      fetchData();
    }
  }, [categoryId]);

  return (
    <div className='recommended'>
      {error ? (
        <p>{error}</p>
      ) : apiData.length > 0 ? (
        apiData.map((item, index) => (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails?.medium?.url} alt={item.snippet.title} />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics?.viewCount)} views</p>
            </div>
          </Link>
        ))
      ) : (
        <p>Loading related videos...</p>
      )}
    </div>
  );
};

export default Recommended;
