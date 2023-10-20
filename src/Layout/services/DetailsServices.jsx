import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DetailsServices = ({ service }) => {
    if (!service) {
        return null;
    }
    const { id, image, name} = service;
    // console.log(id,name);

    // State to track whether the component is expanded or not
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the expansion state when the component is clicked
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    // CSS class to conditionally apply the scaling effect
    const cardClasses = `card-side rounded-lg bg-blue-200 lg:card-side bg-base-100 shadow-xl ${isExpanded ? 'large-card' : ''}`;

    return (
        <div>
            {/* Card container with the scaling effect */}
            <div className={cardClasses} onClick={toggleExpansion}>
                <figure>
                    <img className='photo rounded-lg w-full h-[200px]' src={image} alt="/" />
                </figure>
                <div className="card-body bg-500-red">
                    <h1 className="card-title">{name}</h1>
                    {/* <p>{service_description}</p> */}
                    <div className="card-actions flex justify-center">
                        {/* <button className="btn bg-orange-500 btn-disabled">Cost: {booking_cost}</button> */}
                        <Link to={`service/${service.name}`}>
                            <button className="btn btn1 w-full bg-orange-500">Show More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsServices;
