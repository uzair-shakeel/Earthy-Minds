"use client";
import Image from "next/image";
import React, { useState } from "react";
import SignupModal from "./SignupModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-[150px] w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/logo.png"
          alt="Earthy Minds - Rise of the Wild"
          priority
          width={60}
          height={60}
        />
        <div>
          <h1 className="text-orange font-cinzel text-[22px] font-bold leading-tight">
            Earthy Minds
          </h1>
          <p className="text-orange font-cinzel text-[14px] font-medium">
            Rise of the Wild
          </p>
        </div>
      </div>
      <div className="flex items-center gap-14">
        <div className="flex items-center gap-10">
          <button className="text-orange font-cinzel text-[22px] font-bold">
            Home
          </button>
          <button className="text-orange font-cinzel text-[22px] font-bold">
            FAQ
          </button>
          <button className="text-orange font-cinzel text-[22px] font-bold">
            Contact
          </button>
        </div>
        <button
          onClick={openModal}
          className="font-cinzel text-black border-2 border-black bg-orange w-[164px] h-[50px] rounded-lg text-[20px] font-bold"
        >
          Join Quest
        </button>
      </div>

      <SignupModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Header;
