import React, { Component } from 'react'
import ImageIcon from '../ImageIcon/ImageIcon'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Home.css'
import Navbar from '../NavBar/Navbar';

export default class Home extends Component {
    render() {
        return (
            <div className="HomeScreen">
            <Navbar/>
            <ImageIcon />
                <div className="Home_info">
                    <div className="Home_intro" >
                        <p>Hi,</p>
                        <p>I am Samantha Williams,</p>
                        <p>I am a <span>Designer/Developer.</span></p>
                        <button className="HireMe"> Hire Me</button>
                    </div>
                </div>
                <div className="Down_Arrow">
                    <KeyboardArrowDownIcon  sx={{fontSize:40,color:'#2CE3B2'}}/>
                </div>
                <div className="SocialIcons">
                   <div className="Icon">
                    <FacebookIcon sx={{fontSize: 20,color:'white'}}/>
                   </div>
                    <div className="Icon">
                        <TwitterIcon sx={{fontSize: 20, color:'white'}}/>
                    </div>
                    <div className="Icon">
                        <InstagramIcon sx={{fontSize: 20,color:'white'}}/>
                    </div>
                    <div className="Icon">
                        <GitHubIcon sx={{fontSize: 20, color:'white'}}/>
                    </div>
                </div>
            </div>
        )
    }
}
