import React from 'react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='footer'>
            <p>WatchGeek</p>
            <small>© {year} Zubayer</small>
        </div>
    );
};

export default Footer;