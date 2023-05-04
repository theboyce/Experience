import React from 'react'
import Second from '../img/image 1.jpg'
import Third from '../img/image 2.jpg'
import Fourth from '../img/image 3.jpg'
import Fifth from '../img/image 4.jpg'
import Sixth from '../img/image 5.jpg'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className=' row-span-3 object-cover w-full h-full p-2' src= {Second} alt=''></img>
        <img className=' row-span-2 object-cover w-full h-full p-2' src= {Third} alt=''></img>
        <img className=' row-span-2 object-cover w-full h-full p-2' src= {Fourth} alt=''></img>
        <img className=' row-span-3 object-cover w-full h-full p-2' src= {Fifth} alt=''></img>
        <img className=' row-span-2 object-cover w-full h-full p-2' src= {Sixth} alt=''></img>
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md: text 6xl font-bold'>Plan Your Next Trip</h3>
        <p className=' text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.</p>
        <p className='pb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores atque eius incidunt sequi ex, quos at sint doloremque consectetur amet accusantium soluta hic voluptas tenetur quis aut, labore unde autem.</p>
        <div>
            <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
            <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
      </div>
    </div>
  )
}

export default Plan;
