import React from "react";
import Image from "next/image";

const NatureSpirits = () => {
  return (
    <div className="mt-16 mb-12">
      <div className="flex gap-6 justify-center">
        <div className="w-[120px] h-[120px]">
          <Image
            src="/assets/cc3365f6c22d590829a49afcd160ac0876a100f6.png"
            alt="Forest Spirit"
            width={120}
            height={120}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[120px] h-[120px]">
          <Image
            src="/assets/c3fc58c241689c51aa9ac92edb647a0b0f32d905.png"
            alt="Water Spirit"
            width={120}
            height={120}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[120px] h-[120px]">
          <Image
            src="/assets/582816b1ade1bfce7955562ead51a39ba3f41daf.png"
            alt="Earth Spirit"
            width={120}
            height={120}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[120px] h-[120px]">
          <Image
            src="/assets/e688057f5b0fe98085900e419ee77c10f765b821.png"
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
