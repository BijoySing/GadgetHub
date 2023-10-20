import React from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';

const ProductInfo = () => {
    // const location = useLocation();
    // const { service } = location.state;
    const services = useLoaderData();
    const { id } = useParams();
    // const idInt = parseInt(id);
    const service = services.find(service => service._id === id);
    console.log(service);
    console.log(id);


    return (
        <div className='mb-4'>
            <h1 className="text-2xl lg:text-4xl mb-4 text-blue-800 my-4 font-bold">{service.brandName} Gadgets</h1>
            <hr />
            <div className='lg:flex justify-center mt-2'>
                <div className='mr-2 flex flex-col justify-center items-center lg:w-[400px] h-[70vh]'>
                    <img className='rounded-lg' src={service.image} alt="" />
                    <h1 className='mt-3 text-2xl text-left'>Product Name: {service.name}</h1>
                </div>

                <div className='bg-blue flex flex-col justify-center items lg:w-[500px] h-[70vh]'>
                <h1 className='text-4xl mb-2 font-bold font-sans'>Product Information</h1><hr/>
                <h1 className='text-2xl mt-4 mb-4 '>Product name: {service.name}</h1>

                <h1 className='text-2xl mb-4 font-semibold'>Brand: {service.brandName}</h1>

                <h1 className='text-2xl mb-5'><b>Description</b>:{service.shortDescription}</h1>

                <div className='text-xl bg-red-00 w-full flex justify-around mb-2 font-bold'> <h1 className='text-red-500 bg-gray-100 mr-2 rounded-md px-4 py-1'> Price: {service.price}</h1>
                                <h1 className='text-red-900 bg-gray-100 rounded-md py-2 px-3'>Rating: {service.rating}/5.0</h1></div>
              
                    <div>
                        <button className='btn w-full mb-4  px-30 bg-orange-600'>Add to cart</button>
                    </div>

                </div>
            </div>
           
        </div>
    );
};

export default ProductInfo;
