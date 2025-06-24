import React from 'react';
// { video, onLike, onWatchLater, onRemove, liked, inWatchLater }
import '../styles.css'
const VideoCard = (props) => {
  return (


<div className='col-4'>
    <div className="card m-1 mb-4" >
      <img src={props.video.thumbnail} className="card-img-top card-image" alt="Thumbnail"  />
      <div className="card-body">
        <h4 className="card-title">{props.video.title}</h4>
        <p className="card-text fs-5 fst-italic">{props.video.channelName}</p>
        <p className="card-text text-muted">{props.video.views} views &#8226; {props.video.time} </p>
        {/*-------------- Like function-------------------------------------- */}
        <button className="btn btn-outline-danger me-5 " onClick={() => props.onLike(props.video.number)}>
          {props.liked ? (<span>&#10084;</span>) : (<span>	&#9825;</span>)}
        </button>
       
        {props.onRemove ? (
          <button className="btn btn-outline-secondary" onClick={() => props.onRemove(props.video.number)}>
          &#10060; Remove
          </button>
        ) : (
          <button className="btn btn-outline-primary" onClick={() => props.onWatchLater(props.video.number)}>
            {props.inWatchLater ? ' Saved' : (
<span>&#10010; Watch later</span>
)}
          </button>
        )}
      </div>
    </div>
    </div>

  );
};

export default VideoCard;