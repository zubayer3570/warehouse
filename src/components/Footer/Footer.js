import React from 'react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='footer'>
            <p>warehouse {year}</p>
        </div>
    );
};

export default Footer;