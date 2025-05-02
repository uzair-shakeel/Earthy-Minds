"use client";
import React, { useState } from "react";
import SignupModal from "./SignupModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="mt-[54px] mb-[60px] text-[#EDE8D0]">
      <p className="text-[16px] font-medium font-cinzel text-center">
        © 2025 Earthy Minds. All rights reserved.
        <br />
        🌱 Powered by purpose. Crafted with care.
        <br />
        YouTube | Contact |{" "}
        <button onClick={openModal} className="text-[#EDE8D0] underline">
          Join Quest
        </button>
      </p>

      <SignupModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Footer;
