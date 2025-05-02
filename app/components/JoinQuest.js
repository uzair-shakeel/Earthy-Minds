"use client";
import React, { useState } from "react";
import SignupModal from "./SignupModal";

const JoinQuest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="mt-16 mb-12 text-center">
      <p className="text-lg font-lora mb-4">
        Your signup helps bring this game to life.
        <br />
        Without you, the magic won't happen!
      </p>

      <button
        onClick={openModal}
        className="font-cinzel text-black border-2 border-black bg-orange w-[164px] h-[50px] rounded-lg text-[20px] font-bold"
      >
        Join Quest
      </button>

      <SignupModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default JoinQuest;
