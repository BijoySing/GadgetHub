import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData, useParams } from 'react-router-dom';

const ViewServices = () => {
    const services = useLoaderData();
    const { brandName } = useParams();

    // Filter services based on the brand name from the route parameter
    const filteredServices = services.filter((service) => service.brandName === brandName);

    // const [brandImage, setBrandImage] = useState('');
    const [bannerImages, setBannerImages] = useState([]);

    // useEffect(() => {
    //     // Fetch the brand image from Brand.json based on brandName
    //     fetch('../Brand.json')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const brand = data.find((item) => item.name === brandName);
    //             if (brand) {
    //                 setBrandImage(brand.image);
    //                 console.log();
    //             }
    //         });
    // }, [brandName]);
    useEffect(() => {
        // Fetch the brand image from Brand.json based on brandName
        fetch('../Brand.json')
            .then((res) => res.json())
            .then((data) => {
                const brand = data.find((item) => item.name === brandName);
                if (brand) {
                    // setBrandImage(brand.image);

                    // Set the banner images to a state variable
                    const bannerImages = [
                        brand.banner.photo1,
                        brand.banner.photo2,
                        brand.banner.photo3
                    ];
                    setBannerImages(bannerImages);
                    // console.log(bannerImages);
                }
            });
    }, [brandName]);


    return (
        <div>
            <div className='banner'>
                {/* Display the banner image for the brand from Brand.json */}
                {/* <img src={brandImage} alt={`${brandName} Banner`} /> */}
                {/* //slider add here */}
                {/* <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                   
                </div> */}

                {/* {bannerImages.map((bannerImage, index) => (
                <div key={index} className="banner-image">
                    <img src={bannerImage} alt={`Banner Image ${index + 1}`} />
                </div>
            ))} */}
                <h1 className="text-6xl text-blue-800 my-4 font-bold">{brandName} Gadgets</h1>
                <hr />
             

            </div>
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