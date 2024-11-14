import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap- my-10 mt-40 text-sm'>
        <div> 
            <p className='text-2 md:text-3xl font-bold text-brown-700'>SHEELA DECOR'S</p><br/>
            <p className='w-full md:w-2/3 text-gray-600'>"Welcome to Sheela Home Decors, where elegance meets inspiration. We offer a curated collection of home decor pieces designed to transform your living space into a sanctuary of style and comfort. From timeless classics to modern accents, each item is chosen to reflect quality and craftsmanship. Sign up today to explore our exclusive range and enjoy 20% off your first purchase. Let us help you create a home you love!"</p>
        </div>
        <div>
            <p className='text-2 md:text-3xl font-bold text-brown-700'>COMPANY</p>
            <br/>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div>
            <p className='text-2 md:text-3xl font-bold text-brown-700'>GET IN TOUCH</p>
            <br/>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-123-234-345</li>
                <li>Sheeladecors@123.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ SheelaDecors.com - All rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
