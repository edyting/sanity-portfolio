import React from 'react';
import image from '../component/images/bg-image.jpg'

function Home() {
  return (
    <div>
      <img src={image} alt="" className='absolute object-cover w-full h-full' />
      <div className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className='text-6xl text-blue-600 font-bold leading-none lg:leading-snug'>Hello, I'm Edyting.</h1>
      </div>
    </div>
  )
}

export default Home
