import React from "react"
import "./Contact.scss"
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact=() => {
    return(
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH WITH US: </span>
                <div className="mail">
                    <input type="text" placeholder="Enter your e-mail..."/>
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                    <GoogleIcon/>
                    <TwitterIcon/>
                </div>
            </div>
        </div>
    )
}

export default Contact