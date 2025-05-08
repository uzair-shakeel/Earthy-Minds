'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ArrowRight from '../SvgIcons/ArrowRight';
import ArrowLeft from '../SvgIcons/ArrowLeft';

export default function ImageSlider({ images }) {
     const [currentIndex, setCurrentIndex] = useState(0);
     const [isLoading, setIsLoading] = useState(true);
     const [isHovering, setIsHovering] = useState(false);
     const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

     const imageRef = useRef(null);
     const zoomFactor = 2.5;
     const lensSize = 150;  

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

     const handleMouseMove = (e) => {
          if (!imageRef.current) return;

          const { left, top, width, height } = imageRef.current.getBoundingClientRect();

          const x = e.clientX - left;
          const y = e.clientY - top;

          const relativeX = x / width;
          const relativeY = y / height;

          const boundedX = Math.max(0, Math.min(1, relativeX));
          const boundedY = Math.max(0, Math.min(1, relativeY));

          setMousePosition({ x, y });
          setZoomPosition({ x: boundedX, y: boundedY });
     };

     const handleMouseEnter = () => {
          setIsHovering(true);
     };

     const handleMouseLeave = () => {
          setIsHovering(false);
     };

     const getLensPosition = () => {
          if (!imageRef.current) return { left: 0, top: 0 };

          const { width, height } = imageRef.current.getBoundingClientRect();

          const left = Math.max(0, Math.min(mousePosition.x - lensSize / 2, width - lensSize));
          const top = Math.max(0, Math.min(mousePosition.y - lensSize / 2, height - lensSize));

          return { left, top };
     };

     const lensPosition = getLensPosition();

     return (
          <div className="relative w-[320px] sm:w-[435px] h-[448px] sm:h-[714px]">
               {isHovering && (
                    <div
                         className="md:block hidden absolute -left-[300px] top-0 w-[350px] h-[350px] bg-white border border-gray-200 rounded-[10px] shadow-lg z-30"
                         style={{
                              backgroundImage: `url(${images[currentIndex].src})`,
                              backgroundPosition: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`,
                              backgroundSize: `${zoomFactor * 100}%`,
                              backgroundRepeat: 'no-repeat'
                         }}
                    />
               )}

               <div className="relative w-[207px] sm:w-[329px] h-[448px] sm:h-[714px] mx-auto">
                    {images.map((image, index) => (
                         <div
                              key={index}
                              className={`absolute w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                   }`}
                              onMouseMove={index === currentIndex ? handleMouseMove : null}
                              onMouseEnter={index === currentIndex ? handleMouseEnter : null}
                              onMouseLeave={index === currentIndex ? handleMouseLeave : null}
                              ref={index === currentIndex ? imageRef : null}
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

                              {isHovering && index === currentIndex && (
                                   <div
                                        className="md:block hidden absolute border border-gray-500 bg-white bg-opacity-25 pointer-events-none z-20"
                                        style={{
                                             width: `${lensSize}px`,
                                             height: `${lensSize}px`,
                                             left: `${lensPosition.left}px`,
                                             top: `${lensPosition.top}px`,
                                             boxShadow: '0 0 0 1px rgba(0,0,0,0.2)',
                                        }}
                                   />
                              )}
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

               <div className='w-full flex items-center justify-center'>
                    <div className="text-black py-1 text-base font-bold font-lora">
                         {currentIndex + 1}/{images.length}
                    </div>
               </div>
          </div>
     );
}