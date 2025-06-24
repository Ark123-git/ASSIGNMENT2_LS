import React from "react";
 import { Link } from "react-router-dom";
import '../styles.css'
import Timer from './Timer'
const Navbar = (props) => {
// const [count,setCount]=useState(0)
//     useEffect(



//     )


 const count=JSON.parse(sessionStorage.getItem('watchLater'))?.length || 0;
    return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <Link className="navbar-brand mx-5" to="/">Vidgraph</Link>
    <input className="form-control mx-5 w-50 inputbox" type="search" placeholder="Search" disabled />

  <Link to="/watch-later" className=" btn btn-outline-light btn-primary   " id="watch-later">
      Watch Later
 <div id="watch-later-count" className="  fs-5">{count}</div>
</Link>


<Timer/>

  </nav>
  );
};

export default Navbar;