import { useState, useRef } from 'react';

export default function VideoPlayer({
     videoSrc = "/assets/calendar_printer.mp4",
     thumbnailSrc = "/assets/video-thumbnail.png",
     thumbnailAlt = "Video thumbnail"
}) {
     const [isPlaying, setIsPlaying] = useState(false);
     const [showThumbnail, setShowThumbnail] = useState(true);
     const videoRef = useRef(null);

     const playVideo = () => {
          if (videoRef.current) {
               videoRef.current.play()
                    .then(() => {
                         setIsPlaying(true);
                         setShowThumbnail(false);
                    })
                    .catch((error) => {
                         console.error("Error playing video:", error);
                    });
          }
     };

     const pauseVideo = () => {
          if (videoRef.current) {
               videoRef.current.pause();
               setIsPlaying(false);
          }
     };

     const togglePlay = () => {
          if (isPlaying) {
               pauseVideo();
          } else {
               playVideo();
          }
     };

     return (
          <div className="relative w-full max-w-[246px] sm:max-w-[464px] mx-auto sm:max-h-[340px] h-[188px] sm:h-[340px] flex justify-center">
               <div className="w-full max-w-lg h-full rounded-[10px] overflow-hidden bg-black relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                         {/* Thumbnail overlay */}
                         {showThumbnail && (
                              <div className="absolute inset-0 z-10 border-2 border-[#B3853E] rounded-[10px] overflow-hidden">
                                   <img
                                        src={thumbnailSrc}
                                        alt={thumbnailAlt}
                                        className="w-full h-full object-cover "
                                   />
                              </div>
                         )}

                         {/* Video element */}
                         <video
                              ref={videoRef}
                              className="w-full h-full object-cover border-2 border-[#B3853E] overflow-hidden rounded-[10px]"
                              src={videoSrc}
                              muted
                              loop
                              onClick={togglePlay}
                              preload="metadata"
                         />

                         {/* Play button */}
                         {!isPlaying && (
                              <button
                                   className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-500 flex items-center justify-center z-20"
                                   onClick={togglePlay}
                                   aria-label="Play video"
                              >
                                   <button className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F7931E] flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                                   </button>
                              </button>
                         )}
                    </div>
               </div>
          </div>
     );
}