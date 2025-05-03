"use client";
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import Image from "next/image";
import SignupModal from "./SignupModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const images = [
    {
      src: "/assets/natures-deeds.svg",
      alt: "Habit Tracker App Screen",
    },
    {
      src: "/assets/profile.svg",
      alt: "Nature's Deeds Water Tasks Screen",
    },
    {
      src: "/assets/team.svg",
      alt: "Nature's Deeds Character Screen",
    },
    {
      src: "/assets/wilfury.svg",
      alt: "Nature's Deeds Environment Challenge Screen",
    },
  ];
  return (
    <div className="mb-16">
      <div className="flex items-start justify-between gap-8">
        <div className="max-w-[450px]">
          <h1 className="text-black text-[32px] font-bold font-cinzel mb-4">
            Eco Habit Tracker meets Fantasy Adventure
          </h1>
          <p className="text-center text-[20px] font-medium font-lora mt-3 leading-[130%] mb-6">
            Turn real-world actions into quests.
            <br />
            Level up. Save nature.
          </p>

          <div className="relative my-8">
            <div className="flex justify-center">
              <p className="text-center font-cinzel text-xl font-bold mb-4">
                Watch trailer
              </p>
            </div>
            <div className="relative w-full h-[200px] flex justify-center">
              <div className="w-[300px] h-[200px] rounded-lg overflow-hidden bg-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-orange flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-black font-lora text-sm mt-6 mb-6">
            Your signup helps bring this game to life.
            <br />
            Without you, the magic won't happen!
          </p>
          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="font-cinzel text-black border-2 border-black bg-orange w-[164px] h-[50px] rounded-lg text-[20px] font-bold"
            >
              Join Quest
            </button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <ImageSlider images={images} />
        </div>
      </div>

      <SignupModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Hero;
