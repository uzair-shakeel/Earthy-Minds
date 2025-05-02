import React from "react";
import Image from "next/image";

const ImageComparison = () => {
  return (
    <div className="mt-16 mb-12">
      <div className="flex gap-8 justify-between">
        <div className="flex-1">
          <div className="w-full h-[240px] overflow-hidden rounded-lg mb-3">
            <Image
              src="/assets/fabd11153bf8e69e2f6f351934f24c8a7428ae3a.png"
              alt="Biolysium's nature is fading"
              width={480}
              height={240}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center font-lora italic">
            "Biolysium's nature is fading and needs your help..."
          </p>
        </div>

        <div className="flex-1">
          <div className="w-full h-[240px] overflow-hidden rounded-lg mb-3">
            <Image
              src="/assets/f6780e8ddc87b5babe9f75ea2d6f362f0ddff984.png"
              alt="Your actions awaken life"
              width={480}
              height={240}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center font-lora italic">
            "Your actions awaken life and renew the wilds!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
