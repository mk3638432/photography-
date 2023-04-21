import React from 'react'

const Slider = () => {
  return (
    <div>
                  <h1 className='text-center w-full py-10 font-bold text-2xl'>Gallery</h1>

    
    <div className='sm:grid sm:grid-cols-3 sm:gap-3 p-10 pb-20  '>
        <div>
      
            <h1 className='font-bold text-xl text-center'>Album</h1>
            <img className='w-[1440px] h-600 object-cover' src='https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=918&q=80' alt='/'/>
        </div>
        <div>
            <h1 className='font-bold text-xl text-center'>Shoot</h1>
            <img className='w-[1440px] h-600 object-cover' src='https://images.pexels.com/photos/3856039/pexels-photo-3856039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
        </div>
        <div>
            <h1 className='font-bold text-xl text-center'>Camera</h1>
            <img className='w-[1440px] h-600 object-cover' src='https://images.pexels.com/photos/3014826/pexels-photo-3014826.jpeg?auto=compress&cs=tinysrgb&w=300' alt='/'/>
        </div>
        <div>
            <h1 className='font-bold text-xl text-center'>Photo Shoot</h1>
            <img className='w-[1440px] h-600 object-cover' src='https://images.pexels.com/photos/2927572/pexels-photo-2927572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
        </div>
        <div>
            <h1 className='font-bold text-xl text-center'>Photo Shoot</h1>
            <img className='w-[1440px] h-600 object-cover' src='https://images.pexels.com/photos/3062532/pexels-photo-3062532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
        </div>
    </div>
    </div>
  )
}

export default Slider