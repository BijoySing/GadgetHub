import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData, useParams } from 'react-router-dom';

const ViewServices = () => {
    const services = useLoaderData();
    const { brandName } = useParams();
    console.log(services);

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
                <div className="carousel w-full h-[70vh]">
                    {bannerImages.map((image, index) => (
                        <div key={index} id={`slide${index + 1}`} className={`carousel-item relative w-full ${index === 0 ? 'active' : ''}`}>
                            <img src={image} className="w-full" alt={`Slide ${index + 1}`} />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#slide${index === 0 ? bannerImages.length : index}`} className="btn btn-circle">❮</a>
                                <a href={`#slide${index === 0 ? bannerImages.length : index}`} className="btn btn-circle">❯</a>
                                {/* <a href={`#slide${index === bannerImages.length - 1 ? 0 : index }`} className="btn btn-circle">❯</a> */}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <hr />
            <div className="grid lg:grid-cols-2 gap-4">
                {filteredServices.map((service) => (
                    <div key={service._id}>
                        {/* Card container with the scaling effect */}
                        <div className="m-4 card-side lg:card-side bg-gray-100 shadow-2xl large-card">
                            <div className='flex justify-center'>
                            <figure className="w-[200px] h-[200px] flex justify-center items-center">
                                <img className="photo rounded-lg" src={service.image} alt="/" />
                            </figure>
                            </div>
                            <div className="card-body bg-gray-100">
                                <hr />
                                <h1 className="card-title">{brandName}: {service.name}</h1>
                                <hr></hr>
                                <p className='text-[12px] text-gray-500'>{service.shortDescription}</p>
                               <div className='flex justify-center font-bold'> <h1 className='text-red-500 bg-gray-300 mr-2 rounded-md px-3 py-1'> Price: {service.price}</h1>
                                <h1 className='text-red-900 bg-gray-300 rounded-md py-2 px-3'>Rating: {service.rating}/5.0</h1></div>

                                <div className="card-actions flex justify-between">
                                    <Link to={`updateProducts/${service._id}`}>
                                        <button
                                            // onClick={() => Navigate(`updateProducts/$service._id}`)}
                                            className="btn text-md px-3 text--500 bg-orange-400">
                                            Update info
                                        </button>
                                    </Link>
                                    <button className="btn btn1 px-9 py-2 bg-blue-500">details</button>
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