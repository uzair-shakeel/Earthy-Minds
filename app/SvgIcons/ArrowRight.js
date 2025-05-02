import React from 'react'

const ArrowRight = () => {
     return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g opacity="0.2" filter="url(#filter0_dddd_1_29)">
                    <path d="M52 22C52 33.0457 43.0457 42 32 42C20.9543 42 12 33.0457 12 22C12 10.9543 20.9543 2 32 2C43.0457 2 52 10.9543 52 22Z" fill="black" />
                    <path d="M30.9531 16.0906L31.6469 15.3969C31.9406 15.1031 32.4156 15.1031 32.7063 15.3969L38.7813 21.4687C39.075 21.7625 39.075 22.2375 38.7813 22.5281L32.7063 28.6031C32.4125 28.8969 31.9375 28.8969 31.6469 28.6031L30.9531 27.9094C30.6563 27.6125 30.6625 27.1281 30.9656 26.8375L34.7313 23.25H25.75C25.3344 23.25 25 22.9156 25 22.5V21.5C25 21.0844 25.3344 20.75 25.75 20.75H34.7313L30.9656 17.1625C30.6594 16.8719 30.6531 16.3875 30.9531 16.0906Z" fill="white" />
               </g>
               <defs>
                    <filter id="filter0_dddd_1_29" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                         <feFlood flood-opacity="0" result="BackgroundImageFix" />
                         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                         <feOffset />
                         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_29" />
                         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                         <feOffset />
                         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                         <feBlend mode="normal" in2="effect1_dropShadow_1_29" result="effect2_dropShadow_1_29" />
                         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                         <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect3_dropShadow_1_29" />
                         <feOffset dy="10" />
                         <feGaussianBlur stdDeviation="7.5" />
                         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                         <feBlend mode="normal" in2="effect2_dropShadow_1_29" result="effect3_dropShadow_1_29" />
                         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                         <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect4_dropShadow_1_29" />
                         <feOffset dy="4" />
                         <feGaussianBlur stdDeviation="3" />
                         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                         <feBlend mode="normal" in2="effect3_dropShadow_1_29" result="effect4_dropShadow_1_29" />
                         <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1_29" result="shape" />
                    </filter>
               </defs>
          </svg>

     )
}

export default ArrowRight