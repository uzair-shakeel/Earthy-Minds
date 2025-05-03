import React from "react";
import Image from "next/image";

const BehavioralScience = () => {
  return (
    <div className="mt-8 md:mt-12 mb-12 flex items-center md:flex-row flex-col-reverse gap-6 md:gap-10 max-w-[1020px] mx-auto">
      <Image
        src="/assets/backed-by-behavioral-science.png"
        alt="backed-by-behavioral-science"
        width={200}
        height={200}
        className="sm:w-[200px] sm:h-[200px] w-24 h-24"
      />

      <div className="flex-1">
        <h2 className="text-[14px] sm:text-[22px] lg:text-[26px] font-bold font-cinzel md:text-left text-center mb-2">
          Backed by Behavioral Science
        </h2>
        <p className="text-[12px] sm:text-[20px] lg:text-[22px] font-bold font-lora">
          Inspired by proven behavior change methods: drawing from BJ Fogg's
          Behavior Model and the global bestseller Atomic Habits by James
          Clear.
        </p>
      </div>
    </div>
  );
};

export default BehavioralScience;
