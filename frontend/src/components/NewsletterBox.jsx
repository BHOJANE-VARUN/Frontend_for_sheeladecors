import React from 'react'

const NewsletterBox = () => {

const onSubmitHandler=()=>{
    event.preventDefault();
}

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
      <p className='text-color-gray-400 mt-3'>"Subscribe today and unlock an exclusive 20% discount on your next purchase!"</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
