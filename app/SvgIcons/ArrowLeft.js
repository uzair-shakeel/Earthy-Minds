import React from 'react'

const ArrowLeft = () => {
     return (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g opacity="0.2" filter="url(#filter0_dddd_1_56)">
                    <path d="M12 22C12 10.9543 20.9543 2 32 2C43.0457 2 52 10.9543 52 22C52 33.0457 43.0457 42 32 42C20.9543 42 12 33.0457 12 22Z" fill="black" />
                    <path d="M33.0469 27.9094L32.3531 28.6031C32.0594 28.8969 31.5844 28.8969 31.2937 28.6031L25.2187 22.5313C24.925 22.2375 24.925 21.7625 25.2187 21.4719L31.2937 15.3969C31.5875 15.1031 32.0625 15.1031 32.3531 15.3969L33.0469 16.0906C33.3437 16.3875 33.3375 16.8719 33.0344 17.1625L29.2687 20.75H38.25C38.6656 20.75 39 21.0844 39 21.5V22.5C39 22.9156 38.6656 23.25 38.25 23.25H29.2687L33.0344 26.8375C33.3406 27.1281 33.3469 27.6125 33.0469 27.9094Z" fill="white" />
               </g>
               <defs>
                    <filter id="filter0_dddd_1_56" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                         <feFlood flood-opacity="0" result="BackgroundImageFix" />
                         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                         <feOffset />
                         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_56" />
                         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                         <feOffset />
                         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                         <feBlend mode="normal" in2="effect1_dropShadow_1_56" result="effect2_dropShadow_1_56" />
                         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                         <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect3_dropShadow_1_56" />
                         <feOffset dy="10" />
                         <feGaussianBlur stdDeviation="7.5" />
                         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                         <feBlend mode="normal" in2="effect2_dropShadow_1_56" result="effect3_dropShadow_1_56" />
                         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                         <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect4_dropShadow_1_56" />
                         <feOffset dy="4" />
                         <feGaussianBlur stdDeviation="3" />
                         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                         <feBlend mode="normal" in2="effect3_dropShadow_1_56" result="effect4_dropShadow_1_56" />
                         <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1_56" result="shape" />
                    </filter>
               </defs>
          </svg>

     )
}

export default ArrowLeft