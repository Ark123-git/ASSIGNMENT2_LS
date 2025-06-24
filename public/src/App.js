import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import './styles.css';


function App() {

  const [watchLater, setWatchLater] = useState(() =>
    JSON.parse(sessionStorage.getItem('watchLater')) || []
  );

  useEffect(() => {
    sessionStorage.setItem('watchLater', JSON.stringify(watchLater));
  }, [watchLater]);




  return (
   <>
   <Navbar watchcount={watchLater.length}/>
  
   <Outlet context={{watchLater,setWatchLater}}/>
   
 
   </> 
  );
}

export default App;
