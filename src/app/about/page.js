"use client";

import Navbar from "@/components/Navbar";
import FundCTA from "@/components/FundCTA";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutTimeline from "@/components/AboutTimeline";
import AboutVision from "@/components/AboutVision";
import useMilaapFetch from "@/hooks/useMilaapFetch";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function AboutPage() {
  const { raisedText, goalText, fillWidth, supportersCount } = useMilaapFetch();
  useScrollAnimations();

  return (
    <div className="about-page">

      <main className="about-content">
        {/* Top Hero Section */}
        <AboutHero />

        {/* Timeline Section */}
        <AboutTimeline />

        {/* Dual Image Divider (Scuba / Skydive) */}
        <section className="about-dual-image-section">
          <div className="dual-image-left">
            <img 
              src="/images/gallery/scuba diving .JPG" 
              alt="Syam scuba diving" 
              className="dual-img"
            />
          </div>
          <div className="dual-image-right">
            <img 
              src="/images/f5c28b894e6208ccd4693cb168026c1801f9742.jpeg" 
              alt="Syam Kumar Skydiving" 
              className="dual-img"
            />
          </div>
        </section>

        {/* TEDx Image Section */}
        <section className="about-tedx-image-section" id="tedx-section">
          <img 
            src="/images/1001198735.jpg.jpeg" 
            alt="Syam at TEDx Kanke" 
            className="about-tedx-image"
          />
        </section>

        {/* Vision Section */}
        <AboutVision />
      </main>

      <FundCTA
        raisedText={`${raisedText} raised`}
        goalText={`Goal: ${goalText}`}
        fillWidth={fillWidth}
        supportersCount={supportersCount}
      />
      
      <Footer />
    </div>
  );
}
