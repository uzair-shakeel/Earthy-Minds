import { Suspense } from "react";
import dynamic from "next/dynamic";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TestFirebase from "./lib/test-firebase";

const AnalyticsWrapper = dynamic(() => import("./utils/AnalyticsWrapper"), {
  ssr: false,
});

const AnalyticsDebugger = dynamic(() => import("./utils/AnalyticsDebugger"), {
  ssr: false,
});

const GamifySection = dynamic(() => import("./components/GamifySection"), {
  ssr: true,
  loading: () => (
    <div className="h-72 bg-[#EDE8D0] animate-pulse rounded-lg"></div>
  ),
});
const ChangingTheGame = dynamic(() => import("./components/ChangingTheGame"), {
  ssr: true,
});
const ImageComparison = dynamic(() => import("./components/ImageComparison"), {
  ssr: true,
});
const PlayImpactRepeat = dynamic(
  () => import("./components/PlayImpactRepeat"),
  { ssr: true }
);
const NatureSpirits = dynamic(() => import("./components/NatureSpirits"), {
  ssr: true,
});
const AmberSection = dynamic(() => import("./components/AmberSection"), {
  ssr: true,
});
const BehavioralScience = dynamic(
  () => import("./components/BehavioralScience"),
  { ssr: true }
);
const JoinQuest = dynamic(() => import("./components/JoinQuest"), {
  ssr: true,
});
const FaqSection = dynamic(() => import("./components/FaqSection"), {
  ssr: true,
});

export default function Home() {
  return (
    <AnalyticsWrapper pageName="home">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-[1232px] mx-auto w-full">
          <Header />
          <div className="bg-[#EDE8D0] w-full mx-auto rounded-[10px] py-14 px-6 md:px-8 lg:px-12">
            <Hero />

            <Suspense
              fallback={
                <div className="h-72 bg-[#EDE8D0]/50 animate-pulse rounded-lg"></div>
              }
            >
              <GamifySection />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-40 bg-[#EDE8D0]/50 animate-pulse rounded-lg"></div>
              }
            >
              <ChangingTheGame />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-60 bg-[#EDE8D0]/50 animate-pulse rounded-lg"></div>
              }
            >
              <ImageComparison />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-60 bg-[#EDE8D0]/50 animate-pulse rounded-lg"></div>
              }
            >
              <PlayImpactRepeat />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-40 bg-[#EDE8D0]/50 animate-pulse rounded-lg"></div>
              }
            >
              <NatureSpirits />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-40 bg-[#EDE8D0]/50 animate-pulse rounded-lg"></div>
              }
            >
              <AmberSection />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-40 bg-[#EDE8D0]/50 animate-pulse rounded-lg"></div>
              }
            >
              <BehavioralScience />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-40 bg-[#EDE8D0]/50 animate-pulse rounded-lg"></div>
              }
            >
              <JoinQuest />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-80 bg-[#B3853E4A] animate-pulse rounded-lg"></div>
              }
            >
              <FaqSection />
            </Suspense>
          </div>
          <Footer />
        </div>
      </div>

      {/* Analytics Debugger - Only visible in development */}
      {process.env.NODE_ENV !== "production" && <AnalyticsDebugger />}
    </AnalyticsWrapper>
  );
}
