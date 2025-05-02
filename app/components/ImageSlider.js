'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowLeft from '../SvgIcons/ArrowLeft';
import ArrowRight from '../SvgIcons/ArrowRight';

export default function ImageSlider({ images }) {
     const [currentIndex, setCurrentIndex] = useState(0);
     const [isLoading, setIsLoading] = useState(true);

     const nextSlide = () => {
          setCurrentIndex((prevIndex) =>
               prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
     };

     const prevSlide = () => {
          setCurrentIndex((prevIndex) =>
               prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
     };

     const goToSlide = (index) => {
          setCurrentIndex(index);
     };

     useEffect(() => {
          const interval = setInterval(() => {
          }, 5000);
          return () => clearInterval(interval);
     }, []);

     return (
          <div className="relative w-[435px] h-[714px]">
               <div className="relative w-[329px] h-[714px] mx-auto">
                    {images.map((image, index) => (
                         <div
                              key={index}
                              className={`absolute w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                   }`}
                         >
                              <Image
                                   src={image.src}
                                   alt={image.alt || `Slide ${index + 1}`}
                                   width={329}
                                   height={714}
                                   className="object-contain"
                                   priority={index === 0}
                                   onLoadingComplete={() => setIsLoading(false)}
                              />
                         </div>
                    ))}

                    {isLoading && (
                         <div className="absolute inset-0 flex items-center justify-center bg-amber-100/50 z-20">
                              <div className="w-12 h-12 border-4 border-amber-800 border-t-transparent rounded-full animate-spin"></div>
                         </div>
                    )}
               </div>

               <button
                    onClick={prevSlide}
                    className="absolute -left-2 top-1/2 -translate-y-1/2 z-20"
                    aria-label="Previous slide"
               >
                    <ArrowLeft />
               </button>

               <button
                    onClick={nextSlide}
                    className="absolute -right-2 top-1/2 -translate-y-1/2 z-20"
                    aria-label="Next slide"
               >
                    <ArrowRight />
               </button>

               {/* Page indicator at bottom (optional) */}
               <div className='w-full flex items-center justify-center'>
                    <div className="text-black py-1 text-base font-bold font-lora">
                         {currentIndex + 1}/{images.length}
                    </div>
               </div>
          </div>
     );
}