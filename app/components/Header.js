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
    <div className="h-20 sm:h-[100px] md:h-[150px] w-full flex items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/logo.png"
          alt="Earthy Minds - Rise of the Wild"
          priority
          width={300}
          height={300}
        />
      </div>
      <div className="flex items-center gap-8 lg:gap-14">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <Link href='/' className="text-orange font-cinzel text-sm sm:text-[22px] font-bold">
            Home
          </Link>
          <Link href='#faq' className="text-orange font-cinzel text-sm sm:text-[22px] font-bold">
            FAQ
          </Link>
          <Link href='/contact' className="text-orange font-cinzel text-sm sm:text-[22px] font-bold">
            Contact
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
  );
};

export default Header;
