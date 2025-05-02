import React from "react";
import Image from "next/image";

const BehavioralScience = () => {
  return (
    <div className="mt-16 mb-12">
      <h2 className="text-3xl font-bold font-cinzel mb-6 text-center">
        Backed by Behavioral Science
      </h2>

      <div className="flex items-center gap-8 max-w-3xl mx-auto">
        <div className="w-[150px] h-[150px] flex-shrink-0">
          <Image
            src="/assets/d18b1bbe052ead005f446bdd95028aec7ad709a5.png"
            alt="Book"
            width={150}
            height={150}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1">
          <p className="text-lg font-lora">
            Inspired by proven behavior change methods: drawing from BJ Fogg's
            Behavior Model and the global bestseller Atomic Habits by James
            Clear.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BehavioralScience;
