"use client";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WitnessSection from "@/components/WitnessSection";
import VideoSection from "@/components/VideoSection";
import FeaturedVideo from "@/components/FeaturedVideo";


import GallerySection from "@/components/GallerySection";
import MissionSection from "@/components/MissionSection";
import FundCTA from "@/components/FundCTA";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import HomeVision from "@/components/HomeVision";
import useMilaapFetch from "@/hooks/useMilaapFetch";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function HomePage() {
  const { raisedText, goalText, fillWidth, supportersCount } = useMilaapFetch();
  useScrollAnimations();

  return (
    <>
      <HeroSection
        raisedAmount={raisedText}
        goalAmount={goalText}
        pillFillWidth={fillWidth}
      />
      <HomeVision />
      <WitnessSection />
      <VideoSection />
      <FeaturedVideo />

      <MissionSection />
      <FundCTA
        raisedText={`${raisedText} raised`}
        goalText={`Goal: ${goalText}`}
        fillWidth={fillWidth}
        supportersCount={supportersCount}
      />

      <NewsSection />
      <div 
        className="hero-handwritten text-center" 
        style={{ position: 'relative', margin: '4rem 0 2rem', width: '100%', zIndex: 10 }}
      >
        Gallery
      </div>
      <GallerySection />
      <Footer />
    </>
  );
}
