import React,{useState} from 'react'
import './navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import {NavLink} from 'react-router-dom'
 
function NavBar(props) {
    const [inputValue,setinputValue]=useState('')
    function getInputValue(event){
        var text=event.target.value
        setinputValue(text)
    }
    function sendSearchBarValue(){
        props.videoSearchFunction(inputValue)
    }

    return (
        <div className="nav_bar">
            <div>
               <NavLink to="/youtube"><img src="https://images-na.ssl-images-amazon.com/images/I/31SUpAGALNL.jpg" /></NavLink>
            </div>

            <div className="navbar_middle_part">
                <input type="text" placeholder="Search" onChange={getInputValue} className="search_bar"  />
                <SearchIcon className="search_icon" onClick={sendSearchBarValue}/>
                <MicIcon />
            </div>

            <div className="navbar_last_part">
                <VideoCallIcon style={{marginRight:'20px'}} />
                <AppsIcon style={{marginRight:'20px'}}/>
                <NotificationsIcon style={{marginRight:'20px'}}/>
                <NavLink to="login"><PersonIcon style={{marginRight:'20px'}}/></NavLink>
            </div>
           
        </div>
    )
}

export default NavBar
