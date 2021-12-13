import React from 'react'
import './VideoFooter.css'
//import {motion} from "framer-motion"
import Marquee from "react-fast-marquee"
import MusicNoteIcon from "@material-ui/icons/MusicNote"

const Footer = ({username,caption,song}) => {
    return (
        <div className="videofooter">
            <div className="videofooter__text">
                    <h3 className="videofooter__text__username">@{username}</h3>
                    <p className="videofooter__text__caption">{caption}</p>
                <div className="videofooter__foot__slider">
                    <MusicNoteIcon className="videofooter__music__icon"/>
                    <Marquee
                        play="true"
                        direction="left"
                        speed="80"
                        gradientColor="[0,0,0]"	
                        className="videofooter__slider"
                    >
                        {song}
                    </Marquee>               
                </div>
            </div>            
           <img className="videofooter__logo" src="https://static.thenounproject.com/png/934821-200.png" alt="music"/>
        
        </div>
    )
}
export default Footer


//  {/*   <motion.img 
//             animate={{rotate:[0,360]}}
//          transition={{ ease:"linear", repeat: Infinity }}*/}

// // const Rotatevariants = {
// //     animation:{
// //         rotate:[0,360],
// //     },
// //     transition:{
// //         duration:3,
// //         ease:"linear",
// //         repeat:Infinity,
// //     } 
// // }