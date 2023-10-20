import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='text-center items-align'>
            <div>
                <h1 className='text-8xl'>404 </h1>
               <button className='btn btn-info'><Link to="/">home</Link></button>
            </div>
        </div>
    );
};

export default Errorpage;