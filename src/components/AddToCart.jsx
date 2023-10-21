import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AddToCart = () => {
    const [cart, setCart] = useState([]);

    const services = useLoaderData();
    const { id } = useParams();
    // const idInt = parseInt(id);
    const service = services.find(service => service._id === id);
    console.log(service);
    console.log(id);
    const addtocart=()=>{
        setCart([...cart, service]);

    }
    return (
        <div>
            <div className='mb-4'>
                <h1 className="text-2xl lg:text-4xl mb-4 text-blue-800 my-4 font-bold">{service.brandName} Gadgets</h1>
                <hr />
                <div class="card card-side bg-base-100 shadow-xl lg:w-[700px] justify-center items-center">
                    <figure><img className='lg:w-[300px]' src={service.image} alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text">{service.name}</h2>
                        <div class="card-actions justify-end">
                        <h1 className='text-red-900 bg-gray-100 rounded-md py-2 px-3'>Rating: {service.rating}/5.0</h1>
                        <h1 className='text-red-900 bg-gray-100 rounded-md py-2 px-3'>price: {service.price}</h1>
                            
                            <button class="btn btn-primary">Buy Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;