import React from "react";
import Image from "next/image";

const GamifySection = () => {
  return (
      <div className="flex items-center md:items-start md:flex-row flex-col gap-6 md:gap-8 max-w-[1075px] justify-between mx-auto w-full">
        <div className="flex-1 lg:mt-[35px] max-w-[692px]">
          <h2 className="md:text-left text-center text-[14px] sm:text-[20px] md:text-[26px] lg:text-[28px] font-bold font-cinzel">
            Gamify your sustainable actions
          </h2>
          <p className="text-[12px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold leading-0 font-lora mt-2 sm:mt-4">
            Earthy Minds – Rise of the Wild is your portal to Biolysium, a
            hidden world where nature's magic is fading. Your eco actions fuel
            an epic quest to empower animal heroes and uncover the growing
            threat. Take action now and restore balance to both worlds before
            it's too late!
          </p>
        </div>

        <div className="sm:w-[333px] sm:h-[333px] w-[220px] h-[220px]  relative">
          <div className="w-full h-full overflow-hidden rounded-[10px]">
            <Image
              src="/assets/38a6246671f4bb7763d30150dcc7c76e2e3abe3c (1).png"
              alt="Red Wolf"
              width={333}
              height={333}
              className="object-cover w-full h-full border-2 sm:border-4 rounded-[10px] border-[#B3853E]"
            />
          </div>
          <p className="text-center text-sm sm:text-[20px] font-bold font-lora italic mt-1.5">Red Wolf</p>
        </div>
      </div>
  );
};

export default GamifySection;
