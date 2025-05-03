"use client";
import React, { useState, useRef } from "react";
import ImageSlider from "./ImageSlider";
import SignupModal from "./SignupModal";
import VideoPlayer from "./VideoPlayer";

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
      <div className="flex items-center mlg:items-start justify-between mlg:flex-row flex-col gap-10 mlg:gap-4">
        <div className="w-full">
          <h1 className="text-black text-center text-[16px] sm:text-[20px] lg:text-[28px] font-bold font-cinzel mb-3 lg:mb-5">
            Eco Habit Tracker meets Fantasy Adventure
          </h1>
          <p className="text-center  text-sm sm:text-[20px] lg:text-[24px] font-bold font-lora leading-[110%]">
            Turn real-world actions into quests.
            <br />
            Level up. Save nature.
          </p>

          <div className="relative my-10">
            <div className="flex justify-center">
              <p className="text-center font-lora text-[16px] sm:text-[24px] lg:text-[28px] font-bold mb-4"> 
                Watch trailer
              </p>
            </div>
            <VideoPlayer/>
          </div>
          <p className="text-center text-black font-bold font-lora text-[15px] lg:text-[20px] mt-6 ">
            Your signup helps bring this game to life.
            <br />
            Without you, the magic won't happen!
          </p>
          <div className="flex justify-center mt-2">
            <button
              onClick={openModal}
              className="font-cinzel text-black border-2 border-black bg-orange w-[121px] md:w-[164px] h-10 md:h-[50px] rounded-lg text-base md:text-[20px] font-bold"
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
