import React from 'react';
import VideoCard from '../components/Videocard';
import { useOutletContext } from 'react-router-dom';
import videos  from '../data/dummyvideos';

 const WatchLater = () => {





  const { likedVideos,setLikedVideos,watchLater, setWatchLater } = useOutletContext();


    const watchLaterVideos = videos.filter(video =>
      watchLater.includes(video.number)
    );
  
    const handleRemove = (number) => {
      setWatchLater(prev => prev.filter(v => v !== number));
    };
    const handleLike = (number) => {
      setLikedVideos((prev) => prev.includes(number) ? prev.filter(x => x !== number) : [...prev, number]);
    };
  

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {watchLaterVideos.length === 0 ? <p>No videos are saved to Watch Later.</p> :
        watchLaterVideos.map((video) => (
          <VideoCard
            key={video.number}
            video={video}
            onRemove={handleRemove}
            inWatchLater={true}
            onLike={handleLike}
            liked={likedVideos.includes(video.number)}
          />
        ))}
    </div>
  );
};

export default WatchLater;