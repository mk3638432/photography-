import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center bg-fixed bg-center bg-cover custom-img mb-5 h-screen'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]'/>
        <div className='p-5 font-bold text-white z-[3] m-auto mb-[10rem]'>
            <h2 className='text-2xl sm:text-5xl'>Caputur Photogrsphy</h2>
            <p className='py-5 sm:text-xl '>I Capture moments in nature and keep them alive</p>
            <button className='px-8 py-2 border'>Back</button>
        </div>
    </div>
  )
}

export default Hero