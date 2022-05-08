import React from 'react';
import Heading from '../Shared/Heading/Heading';
import './Features.css'

const Features = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center'>Why Use Our website?</h1>
            <div className='feature-container'>
                <div>
                    <img src="https://i.pinimg.com/736x/a1/af/79/a1af7982a10eb6cd15207fae1b602bfc--watch-companies-watch-display.jpg" alt="" />
                </div>
                <div className='p-4'>
                    <h4>The simple answer is we make the tedious work of managing stocks fast and easy!</h4>
                    <ul>
                        <li>We keep Track of every products status.</li>
                        <li>Updating a products status is super easy.</li>
                        <li>We provide the best possible security for yor data.</li>
                        <li>We are Totally Free to Use and here you don't have to watch any types of ads.</li>
                        <li>We have Served more than 12+ thousands people, with 4.5+ rating. So there is no Question about trust!</li>
                    </ul>
                    <h4>So, handover the pressure to us! and save Time for more important tasks of your Life</h4>
                </div>
            </div>
        </div>
    );
};

export default Features;