import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GamifySection from "./components/GamifySection";
import ChangingTheGame from "./components/ChangingTheGame";
import ImageComparison from "./components/ImageComparison";
import PlayImpactRepeat from "./components/PlayImpactRepeat";
import NatureSpirits from "./components/NatureSpirits";
import AmberSection from "./components/AmberSection";
import BehavioralScience from "./components/BehavioralScience";
import JoinQuest from "./components/JoinQuest";
import FaqSection from "./components/FaqSection";
import TestFirebase from "./lib/test-firebase";

export default function Home() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <div className="max-w-[1232px] mx-auto w-full">
        <Header />
        <div className="bg-[#EDE8D0] w-full mx-auto rounded-[10px] py-14 px-14">
          <Hero />
          <GamifySection />
          <ChangingTheGame />
          <ImageComparison />
          <PlayImpactRepeat />
          <NatureSpirits />
          <AmberSection />
          <BehavioralScience />
          <JoinQuest />
          <FaqSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
