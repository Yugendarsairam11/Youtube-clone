import React, {Component} from 'react'
import './body.css'
import Clip from './Clip'

class Body extends Component{
        render(){  
            let src=`https://www.youtube.com/embed/${this.props.initialVideo}`
        return (
            <div className="body">
               <div className="body_sidenav">
               <h1>side nav</h1>
               </div>
               <div className="body_content">
                    <iframe width="956"  src={src} height="538" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
               </div>
               <div className="video_list">
                {this.props.videosArray.map((video,index)=><Clip setInitialVideo={this.props.setInitialVideo} key={index}  videoContent={video}/>)}
               </div>
            </div>
        )
    }
}

export default Body
