import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
        {/* Logo */}
        <Link to="/">
        <img className='header_icon' 
            src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg" 
            alt="" />
        </Link>

        <div className="header_center">
            <input type="text" />
            <SearchIcon />
        </div>

        <div className="header_right">
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar src="/broken-image.jpg" />

        </div>
    </div>
  )
}

export default Header