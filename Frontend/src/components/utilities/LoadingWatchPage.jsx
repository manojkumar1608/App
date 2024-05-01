// LoadingVideoPage.js

import React from 'react';
import HomePage from '../../Pages/HomePage';

const LoadingWatchPage = () => {
    return (
        <div className='flex flex-row'>
            <div className='flex flex-col'>
            <div className='flex flex-col w-[50rem] h-[26rem] mt-2 mr-2 rounded-2xl bg-gray-300 animate-pulse'>
            </div>
            <div>
                <HomePage/>
            </div>
            </div>
            <div className='w-full h-[32rem] mt-2 rounded-2xl bg-gray-300 animate-pulse'>
            </div>
           
        </div>
       
    );
};

export default LoadingWatchPage;
