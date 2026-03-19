"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

function MissionCard({ mission, index, progress }) {
  // If index === 0, it stays at y: 0, but scales and fades down as progress goes from 0.1 to 0.9
  // If index === 1, it starts at y: 100vh and moves up to 0 as progress goes from 0.1 to 0.9

  const scale = useTransform(progress, [0.1, 0.8], [1, 0.92]);
  const opacity = useTransform(progress, [0.1, 0.8], [1, 0.4]);
  const yEnter = useTransform(progress, [0.1, 0.8], ["120vh", "0vh"]);

  const springConfig = { stiffness: 300, damping: 30 };
  const scaleSpring = useSpring(scale, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);
  const ySpring = useSpring(yEnter, springConfig);

  return (
    <motion.div
      className="framer-card-outer"
      style={{
        zIndex: index + 10,
        gridArea: "1 / 1 / 2 / 2",
        width: "100%",
        y: index === 0 ? 0 : ySpring,
        scale: index === 0 ? scaleSpring : 1,
        opacity: index === 0 ? opacitySpring : 1,
      }}
    >
      <div className="mission-timeline-wrapper">
        <div className="framer-marker">
          <div className="framer-marker-circle">{mission.id}</div>
        </div>
      </div>

      <div className="framer-card-inner">
        <h2 className="framer-card-title">{mission.title}</h2>
        <div className="framer-card-text">
          <p>{mission.text}</p>
          {mission.extraText && <p style={{ marginTop: '1rem' }}>{mission.extraText}</p>}
        </div>
        <div className="framer-card-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mission.image} alt={mission.title} />
        </div>
      </div>
    </motion.div>
  );
}

export default function MissionSection() {
  const sectionRef = useRef(null);

  // The outer section governs the scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const missions = [
    {
      id: 1,
      title: "Mission 1: The Tom Cruise Cliff Jump & Cinematic Proof of Concept",
      text: "A custom high-impact prosthetic leg - built from scratch for motocross landings, not walking. Engineered to absorb extreme forces, protect a vulnerable spine, and enable a live cinematic jump in Norway inspired by Mission: Impossible - captured for a documentary with global reach. One jump. Real risk. Real engineering. A blueprint for adaptive action sports worldwide.",
      image: "/images/5050c3527da97e010b06dcb26f7995b428db0689.png",
    },
    {
      id: 2,
      title: "Mission 2: Wingsuit Flight at 42,000ft - Spinal Protection & Survival",
      text: "Wingsuit flight demands perfect bilateral symmetry. Syam has one leg and severe scoliosis - making this mission widely considered impossible. The solution: a hand-controlled mechanical leg that dynamically balances mass and restores aerodynamic control mid-flight, paired with a custom thermal suit and redundant oxygen systems.",
      extraText: "Three years of preparation. Wind tunnel testing in Sweden. Progressive jump validation. And a target of 42,000ft - where aerospace begins.",
      image: "/images/97bd86a023f47a79ee9ff596f28df44efaaa7448.png",
    },
  ];

  return (
    <section id="mission" className="mission-section mission-section-scroll" ref={sectionRef}>
      <div className="mission-bg-text-framer" aria-hidden="false">
        MISSION
      </div>

      {/* Sticky container that stays on screen while parsing the 250vh height */}
      <div className="card-wrapper" style={{ position: "sticky", top: "16vh", height: "100vh", width: "100%" }}>
        <div className="card-container" style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          alignItems: "start",
          justifyItems: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative"
        }}>
          {missions.map((mission, index) => (
            <MissionCard
              mission={mission}
              index={index}
              progress={scrollYProgress}
              total={missions.length}
              key={mission.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
