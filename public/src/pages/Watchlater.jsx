import React, { useEffect, useState } from 'react';
import VideoCard from '../components/Videocard';
import videos  from '../data/dummyvideos';

const WatchLater = () => {
  const [watchLater, setWatchLater] = useState(() => JSON.parse(sessionStorage.getItem('watchLater')) || []);

  useEffect(() => {
    sessionStorage.setItem('watchLater', JSON.stringify(watchLater));
  }, [watchLater]);

  const handleRemove = (number) => {
    setWatchLater((prev) => prev.filter((vid) => vid !== number));
  };

  const savedVideos = videos.filter((vid) => watchLater.includes(vid.number));

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {savedVideos.length === 0 ? <p>No videos saved to Watch Later.</p> :
        savedVideos.map((video) => (
          <VideoCard
            key={video.number}
            video={video}
            onRemove={handleRemove}
            inWatchLater={true}
          />
        ))}
    </div>
  );
};

export default WatchLater;