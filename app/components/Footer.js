"use client";
import React, { useState } from "react";
import SignupModal from "./SignupModal";
import Link from "next/link";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="mt-[54px] mb-[60px] text-white">
      <p className="text-xs sm:text-[18px] leading-[22px] font-bold font-cinzel">
        © 2025 Earthy Minds. All rights reserved.
        <br />
        🌱 Powered by purpose. Crafted with care.
        <br />
        YouTube |
        <button onClick={openModal} className="ml-1 text-white underline">
          Join Quest
        </button>
      </p>
      <Link href='mailto:hello@earthyminds.com' className="font-lora font-bold text-[18px] leading-[18px]">hello@earthyminds.com</Link>

            <SignupModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Footer;
