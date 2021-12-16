import React, { useRef, useState } from 'react'
import './Video.css'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Video = ({src,username,caption,song,shares,likes,messages}) => {
    const [playing,setPlaying] = useState(false);
    const videoRef = useRef(null);
    
    const onVideoPress = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    
    return (
        <div className="video">
            <video className="video__player"
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src={src}
            >
            </video>
            <Footer
                username={username}
                caption={caption}
                song={song}
            />
            <Sidebar shares={shares} likes={likes} messages={messages}/>
        </div>
    )
}
export default Video
