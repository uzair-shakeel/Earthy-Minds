"use client";
import Image from "next/image";
import React, { useState } from "react";
import SignupModal from "./SignupModal";
import Link from "next/link";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#1E3A24] h-[75px] sm:h-[100px] md:h-[155px] py-1 sm:py-0 pr-2 md:pr-0">
      <div className="max-w-[1365px] mx-auto px-3 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="Earthy Minds - Rise of the Wild"
            priority
            width={340}
            height={340}
            className="sm:w-[280px] md:w-[380px] h-auto w-[200px]"
          />
        </div>
        <div className="flex items-end sm:items-center gap-8 lg:gap-14">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <Link
              href="#hero"
              className="text-orange font-cinzel text-base sm:text-[28px] font-bold"
            >
              Home
            </Link>
            <Link
              href="#faq"
              className="text-orange font-cinzel text-base sm:text-[28px] font-bold"
            >
              FAQ
            </Link>
          </div>
          <button
            onClick={openModal}
            className="font-cinzel md:block hidden text-black border-2 border-black bg-orange w-[164px] h-[50px] rounded-lg text-[20px] font-bold"
          >
            Join Quest
          </button>
        </div>

        <SignupModal isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>
    </div>
  );
};

export default Header;