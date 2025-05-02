import React from "react";
import Image from "next/image";

const NatureSpirits = () => {
  return (
    <div className="mt-16 mb-12">
      <div className="flex gap-6 justify-center">
        <div className="w-[120px] h-[120px]">
          <Image
            src="/assets/forest-spirit.png"
            alt="Forest Spirit"
            width={120}
            height={120}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[120px] h-[120px]">
          <Image
            src="/assets/water-spirit.png"
            alt="Water Spirit"
            width={120}
            height={120}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[120px] h-[120px]">
          <Image
            src="/assets/earth-spirit.png"
            alt="Earth Spirit"
            width={120}
            height={120}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[120px] h-[120px]">
          <Image
            src="/assets/flower-spirit.png"
            alt="Flower Spirit"
            width={120}
            height={120}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-center font-lora italic mt-4">
        Become one of many nature spirits and restore the harmony.
      </p>
    </div>
  );
};

export default NatureSpirits;
