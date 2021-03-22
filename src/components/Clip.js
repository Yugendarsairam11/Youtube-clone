import React from 'react'
import './clip.css'
function Clip(props) {
    let img=props.videoContent.snippet.thumbnails.high.url
    let videoId=props.videoContent.id.videoId
    return (
        <div className="clip" onClick={()=>props.setInitialVideo(videoId)}>
        <img src={img}></img>
        <p>{props.videoContent.snippet.title}</p>
        
        <div className="details">
            <p>{props.videoContent.snippet.channelTitle}</p>
        </div>
            
        </div>
    )
}

export default Clip
