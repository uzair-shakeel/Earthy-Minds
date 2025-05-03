import React from "react";
import Image from "next/image";

const AmberSection = () => {
  return (
    <div className="flex items-center md:flex-row flex-col-reverse gap-6 md:gap-10 max-w-[1020px] mx-auto">
          <Image
            src="/assets/amber-currency-of-real-change.png"
            alt="amber-currency-of-real-change"
            width={200}
            height={200}
            className="sm:w-[200px] sm:h-[200px] w-24 h-24"
          />
    
          <div className="flex-1">
            <h2 className="text-[14px] sm:text-[22px] lg:text-[26px] font-bold font-cinzel md:text-left text-center mb-2">
            Amber: Currency of Real Change
            </h2>
            <p className="text-[12px] sm:text-[20px] lg:text-[22px] font-bold font-lora">
            More valuable than gold, because every nugget is backed by nature-positive impact. Amber awakens new animal heroes and helps to restore balance between worlds. Earn by doing Nature’s Deeds- real life eco actions.
            </p>
          </div>
        </div>
  );
};

export default AmberSection;
