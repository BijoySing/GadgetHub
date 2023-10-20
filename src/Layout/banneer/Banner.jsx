import React from 'react';
import './Banner.css'; // Import the CSS file for styling

const Banner = () => {
    return (
        <div className='banner-container mt-1'>
            <img
                className='banner-image'
                src="https://i.ibb.co/S3hymDJ/g2.jpg"
                alt=""
            />
            <div className='overlay'></div> {/* Add an overlay */}
            <div className='banner-text'>
                <h1 className='text-3xl lg:text-7xl text-blue-200 font-bold'>Welcome to our GadgetsHub</h1>
                <h2 className=' text-xl lg:'></h2>
                <p className='text-gray-200 text-purple-100'>
                  

                    </p>
            </div>
        </div>
    );
};

export default Banner;
