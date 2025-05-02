import React from "react";
import Image from "next/image";

const AmberSection = () => {
  return (
    <div className="mt-16 mb-12">
      <h2 className="text-3xl font-bold font-cinzel mb-6 text-center">
        Amber: Currency of Real Change
      </h2>

      <div className="flex items-center gap-8 max-w-3xl mx-auto">
        <div className="w-[150px] h-[150px] flex-shrink-0">
          <Image
            src="/assets/amber.png"
            alt="Amber gem"
            width={150}
            height={150}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1">
          <p className="text-lg font-lora">
            More valuable than gold, because every nugget is backed by
            nature-positive impact. Amber awakens new animal heroes and helps to
            restore balance between worlds. Earn by doing Nature's Deeds- real
            life eco actions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmberSection;
