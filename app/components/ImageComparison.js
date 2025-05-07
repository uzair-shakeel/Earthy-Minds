import React from "react";
import Image from "next/image";

const ImageComparison = () => {
  return (
    <div className="mt-10 sm:mt-16 md:mb-14 max-w-[1080px] mx-auto">
      <div className="flex gap-[15px] md:gap-10 sm:flex-row flex-col justify-between">
        <div className="flex-1">
          <div className="w-full h-[184px] sm:h-[302px] overflow-hidden rounded-lg mb-2.5">
            <Image
              src="/assets/fabd11153bf8e69e2f6f351934f24c8a7428ae3a.png"
              alt="Biolysium's nature is fading"
              width={538}
              height={302}
              className="w-full h-full object-cover border-4 border-[#B3853E] rounded-[10px]"
            />
          </div>
          <p className="text-center text-black text-[12px] sm:text-[18px] md:text-[20px] font-lora font-bold italic">
            "Biolysium's nature is fading and needs your help..."
          </p>
        </div>

        <div className="flex-1">
          <div className="w-full h-[184px] sm:h-[302px] overflow-hidden rounded-lg mb-2.5">
            <Image
              src="/assets/f6780e8ddc87b5babe9f75ea2d6f362f0ddff984.png"
              alt="Your actions awaken life"
              width={538}
              height={302}
              className="w-full h-full object-cover border-4 border-[#B3853E] rounded-[10px]"
            />
          </div>
          <p className="text-center text-black text-[12px] sm:text-[18px] md:text-[20px] font-lora font-bold italic">
            "Your actions awaken life and renew the wilds!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
