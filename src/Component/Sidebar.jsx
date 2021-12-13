import React, { useState } from 'react'
import "./Sidebar.css"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import MessageIcon from "@material-ui/icons/Message"
import ShareIcon from "@material-ui/icons/Share"

const Sidebar = ({shares,likes,messages}) => {
    const [liked,setLiked] = useState(false);
    const like = ()=>{
        if(liked){
            setLiked(false);
        }else{
            setLiked(true);
        }
    }
    return (
        <div className="sidebar">
            <div className="sidebar__heart">
            {liked?(<FavoriteIcon className="sidebar__heart__icon" onClick={like}/>
            ):<FavoriteBorderIcon className="sidebar__heart__icon" onClick={like}/>}
                <p className="sidebar__tally">{liked?(likes+1):(likes)}</p>
            </div>
            <div className="sidebar__message">
                <MessageIcon className="sidebar__message__icon"/>
                <p className="sidebar__tally">{messages}</p>

            </div>
            <div className="sidebar__share">
                <ShareIcon className="sidebar__share__icon"/>
                <p className="sidebar__tally">{shares}</p>
            </div>
        </div>
    )
}

export default Sidebar
