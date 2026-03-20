"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection({ raisedAmount, goalAmount, pillFillWidth }) {
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const heroBg = heroVideoRef.current;
    if (!heroBg) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight * 1.5) {
        heroBg.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Yellow orb decorations */}
      <div className="hero-orb hero-orb-left"></div>
      <div className="hero-orb hero-orb-right"></div>

      {/* Progress pill */}
      <div className="progress-pill">
        <div className="pill-bar">
          <div className="pill-fill" id="heroPillFill" style={{ width: pillFillWidth }}></div>
        </div>
        <span className="pill-text">{raisedAmount} of {goalAmount} raised</span>
      </div>

      {/* Hero background VIDEO */}
      <div className="hero-image-wrap">
        <video
          className="hero-video"
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          ref={heroVideoRef}
        ></video>
      </div>

      {/* Text overlay */}
      <div className="hero-content">
        <p className="hero-greeting">Hi, I&apos;m</p>
        <h1 className="hero-name">Syam Kumar</h1>
        <p className="hero-desc">
          I don&apos;t want my story to inspire sympathy.<br />
          I want it to inspire millions of people to rethink their limits.
        </p>
        <div className="hero-btns-group">
          <a 
            href="https://milaap.org/fundraisers/support-syam-kumar-s-s?utm_source=syamkumar-site" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-fund hero-btn"
          >
            Fuel my dream
          </a>
          <Link href="/learn" className="btn-outline-dark hero-btn-secondary">Learn</Link>
        </div>
      </div>


    </section>
  );
}
