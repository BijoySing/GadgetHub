import React, { useEffect, useState } from 'react';
import DetailsServices from '../services/DetailsServices';
import ViewServices from '../viewServices/ViewServices';

const AllServices = () => {
    const [service, setServices] = useState([]);
    useEffect(() => {
        fetch('Brand.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div>
                <h1 className='text-6xl text-center my-8 font-bold'>Top Brands</h1>
                <hr />
            </div>
            
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
                {
                    service.map(service => 
                    <DetailsServices key={service.id} service={service}></DetailsServices>,
                    // <ViewServices key={service.id} service={service}></ViewServices>
                    )
                    

                }
            </div>
            
        </div>
    );
};

export default AllServices;