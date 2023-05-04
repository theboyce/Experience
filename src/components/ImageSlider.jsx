import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';


const ImageSlider = () => {

    const slides = [
        {
           url: 'https://plus.unsplash.com/premium_photo-1667545168921-34f756495d7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
            title: 'Sushi'
        },
        {
           url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Pasta'
        },
        {
           url: 'https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Salmon'
        }
    ]

     const [currentIndex, setCurrentIndex] = useState(0);

     const prevSlide = () => {
        const isFirstSlide = currentIndex===0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
     }

     const nextSlide = () => {
        const isLastIndex = currentIndex === slides.length -1;
        const newIndex = isLastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
     }

     const goToSlide = (slideIndex) => {
            setCurrentIndex(slideIndex)
     }


  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[currentIndex].url})`}}> 
        </div>
        {/* Left Arrow */}
        <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer '>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
         {/* Right Arrow */}
         <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer '>
            <BsChevronCompactRight onClick={nextSlide} size={30}  />
         </div>

         <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) =>(
                <div className='text-2xl cursor-pointer'key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                <RxDotFilled />
                </div>
            ))}

         </div>
        
    </div>
  )
}

export default ImageSlider