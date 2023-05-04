import React from 'react';
import First from '../img/image.jpg';

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img className="w-full h-screen object-cover" src={First} alt="" />
      <div  className='bg-black/50 absolute top-0 left-0 w-full h-screen'/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate amet voluptatibus ipsum excepturi officiis numquam assumenda tempora ex blanditiis in?</p>
          <button className='bg-white text-black w-40 font-bold'>Reserve Now</button>
        


        </div>
      </div>
    </div>
  );
};

export default Hero;
