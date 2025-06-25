import React from 'react'
import { useOutletContext } from 'react-router-dom';
import VideoCard from '../components/Videocard'
import videos from '../data/dummyvideos'
import Footer from '../components/Footer'


const Home=()=>{


const { watchLater, setWatchLater,likedVideos,setLikedVideos } = useOutletContext();

  const handleWatchLater = (number) => {


    if (!watchLater.includes(number)) {
      setWatchLater(prev => [...prev, number]);
    }
  };

    





    // const [likedVideos, setLikedVideos] = useState(() => JSON.parse(sessionStorage.getItem('likes')) || []);

  
    // useEffect(() => {
    //   sessionStorage.setItem('likes', JSON.stringify(likedVideos));
    //   sessionStorage.setItem('watchLater', JSON.stringify(watchLater));
    // }, [likedVideos, watchLater]);





const handleLike = (number) => {
    setLikedVideos((prev) => prev.includes(number) ? prev.filter(x => x !== number) : [...prev, number]);
  };


  return (
    <div className='container-fluid'>
    <div className="row">
      {videos.map((video) => (
        
        <VideoCard
          key={video.number}
          video={video}
          onLike={handleLike}
          onWatchLater={handleWatchLater}
          liked={likedVideos.includes(video.number)}
          inWatchLater={watchLater.includes(video.number)}
   
       
        />
     
      ))}
    </div>
    <Footer/>
    </div>
   
  );


}
export default  Home