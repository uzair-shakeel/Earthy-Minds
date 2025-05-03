import React from "react";
import Image from "next/image";

const NatureSpirits = () => {
  return (
    <div className="mt-16 mb-10 md:mb-[85px]">
      <div className="max-w-[926px] mx-auto w-full grid grid-cols-4 gap-3 md:gap-6">
        <Image
          src="/assets/forest-mask.png"
          alt="Forest Mask"
          width={227}
          height={227}
        />
        <Image
          src="/assets/ocean-turquois.png"
          alt="Ocean Turquois"
          width={227}
          height={227}
        />
        <Image
          src="/assets/jungle-mask.png"
          alt="Jungle Mask"
          width={227}
          height={227}
        />
        <Image
          src="/assets/tundra-purple.png"
          alt="Tundra Purple"
          width={227}
          height={227}
        />
      </div>
      <p className="text-center text-[12px] sm:text-[20px] font-bold font-nunito italic mt-2.5">
        Become one of many nature spirits and restore the harmony.
      </p>
    </div>
  );
};

export default NatureSpirits;
