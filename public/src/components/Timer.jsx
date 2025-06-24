import React, { useEffect, useState } from 'react'
import '../styles.css'
const Timer = () => {

const [second,setSecond]=useState(0);

useEffect(()=>{
const intervalfunc=setInterval(()=>{

setSecond((prev)=>prev+1);

},1000)

return ()=> clearInterval(intervalfunc)


},[])


  return (
    <div id="Timer" className=" py-2 px-3 bg-info fs-5 font-weight-bold text-dark ms-5 rounded-4">
     Time spent: {second} seconds
    </div>
  )
}

export default Timer
