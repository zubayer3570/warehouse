import React from 'react';
import './Heading.css'
const Heading = (props) => {
    const title = props.title
    const width = parseFloat(props.width)
    return (
        <div className='heading-container'>
            <h2 className='text-center mt-4'>{title}</h2>
            <div className='line' style={{ width: `${width}px` }}></div>
        </div>

    );
};

export default Heading;