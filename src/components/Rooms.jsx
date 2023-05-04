import React from 'react'
import Room1 from '../img/room1.jpg'
import Room2 from '../img/room2.jpg'
import Room3 from '../img/room3.jpg'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Find Interior Rooms</h3>
        <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit quos, saepe minima distinctio officiis.</p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img className='object-cover w-full h-full' src={Room1} alt="/" />
        <img className=' row-span-2 object-cover w-full h-full' src={Room3} alt="/" />
        <img className='object-cover w-full h-full' src={Room2} alt="/" />
      </div>
    </div>
  )
}

export default Rooms;
