"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-bg">
        {/* Background is handled in CSS but could also be an absolutely positioned image */}
        <div
          className="about-hero-bg-img"
          style={{ backgroundImage: 'url("/images/project-hero.png")' }}
        />
      </div>

      <div className="about-hero-container">



        <div className="about-hero-content">
          <h1 className="about-hero-title">
            <span className="text-yellow">I shouldn&apos;t have survived.</span>
            <br />
            <span className="text-yellow">I chose to fly instead.</span>
          </h1>

          <p className="about-hero-desc">
            Born with conditions that gave me a 23% chance of survival. Now jumping from 13,000 feet without a prosthetic and engineering my way to 42,000.
          </p>

          <p className="about-hero-subtag">
            This is what happens when you refuse the ceiling.
          </p>

          <Link href="/fund" className="btn-fund about-hero-btn">
            Fuel my dream
          </Link>
        </div>


      </div>
    </section>
  );
}
