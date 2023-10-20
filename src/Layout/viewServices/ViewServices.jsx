import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData, useParams } from 'react-router-dom';

const ViewServices = () => {
    const services = useLoaderData();
    const { brandName } = useParams();

    // Filter services based on the brand name from the route parameter
    const filteredServices = services.filter((service) => service.brandName === brandName);

    const [brandImage, setBrandImage] = useState('');

    useEffect(() => {
        // Fetch the brand image from Brand.json based on brandName
        fetch('../Brand.json')
            .then((res) => res.json())
            .then((data) => {
                const brand = data.find((item) => item.name === brandName);
                if (brand) {
                    setBrandImage(brand.image);
                }
            });
    }, [brandName]);

    return (
        <div>
            <div>
                {/* Display the banner image for the brand from Brand.json */}
                <img src={brandImage} alt={`${brandName} Banner`} />
            </div>
            <h1 className="text-6xl my-4 font-bold">{brandName} Gadgets</h1>
            <hr />
            <div className="grid lg:grid-cols-2 gap-4">
                {filteredServices.map((service) => (
                    <div key={service._id}>
                        {/* Card container with the scaling effect */}
                        <div className="m-4 card-side lg:card-side bg-gray-100 shadow-2xl large-card">
                            <figure className="w-[200px] h-[200px]">
                                <img className="photo rounded-lg" src={service.image} alt="/" />
                            </figure>
                            <div className="card-body bg--500">
                                <h1 className="card-title">{service.name}</h1>
                                <p>{service.shortDescription}</p>
                                <h1> price: {service.price}</h1>
                                <div className="card-actions flex justify-between">
                                    <Link to={`updateProducts/${service._id}`}>
                                        <button  
                                        // onClick={() => Navigate(`updateProducts/$service._id}`)}
 className="btn text-xl text--500 bg-orange-400">
                                            Update info
                                        </button>
                                    </Link>
                                    <button className="btn btn1 px-6 bg-blue-500">details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewServices;
