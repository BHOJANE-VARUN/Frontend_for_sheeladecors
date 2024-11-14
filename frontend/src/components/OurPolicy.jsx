import React from 'react'
import exchange from '../assets/exchange.jpeg';
import support from '../assets/support.jpeg';
import quality from '../assets/quality.jpeg';



const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={exchange} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
        <p className='text-gray-400'><u>NOTE:</u> Exchange will be accepted only</p>
        <p className='text-gray-400'>if recieved product is DAMAGED</p>
      </div>

      <div>
        <img src={quality} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold'>7 days return policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>

      <div>
        <img src={support} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
