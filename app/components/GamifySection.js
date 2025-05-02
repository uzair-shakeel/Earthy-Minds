import React from "react";
import Image from "next/image";

const GamifySection = () => {
  return (
    <div className="mt-16 mb-12">
      <h2 className="text-3xl font-bold font-cinzel mb-6">
        Gamify your sustainable actions
      </h2>

      <div className="flex items-center gap-8">
        <div className="flex-1">
          <p className="text-lg font-lora mb-4">
            Earthy Minds – Rise of the Wild is your portal to Biolysium, a
            hidden world where nature's magic is fading. Your eco actions fuel
            an epic quest to empower animal heroes and uncover the growing
            threat. Take action now and restore balance to both worlds before
            it's too late!
          </p>
        </div>

        <div className="w-[300px] h-[300px] relative">
          <div className="w-full h-full overflow-hidden rounded-lg">
            <Image
              src="/assets/red-wolf.png"
              alt="Red Wolf"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-center mt-2 font-lora italic">Red Wolf</p>
        </div>
      </div>
    </div>
  );
};

export default GamifySection;
