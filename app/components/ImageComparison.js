import React from "react";
import Image from "next/image";

const ImageComparison = () => {
  return (
    <div className="mt-16 mb-12">
      <div className="flex gap-8 justify-between">
        <div className="flex-1">
          <div className="w-full h-[240px] overflow-hidden rounded-lg mb-3">
            <Image
              src="/assets/fading-nature.jpg"
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
              src="/assets/renewed-nature.jpg"
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
