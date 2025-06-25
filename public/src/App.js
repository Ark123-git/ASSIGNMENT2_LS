import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import './styles.css';


function App() {
  const [likedVideos, setLikedVideos] = useState(() => JSON.parse(sessionStorage.getItem('likes')) || []);
  const [watchLater, setWatchLater] = useState(() =>
    JSON.parse(sessionStorage.getItem('watchLater')) || []
  );

  // useEffect(() => {
  //   sessionStorage.setItem('watchLater', JSON.stringify(watchLater));
  // }, [watchLater]);
  useEffect(() => {
    sessionStorage.setItem('likes', JSON.stringify(likedVideos));
    sessionStorage.setItem('watchLater', JSON.stringify(watchLater));
  }, [likedVideos, watchLater]);



  return (
   <>
   <Navbar watchcount={watchLater.length}/>
  
   <Outlet context={{watchLater,setWatchLater,likedVideos,setLikedVideos}}/>
   
 
   </> 
  );
}

export default App;
