"use client";

import { useRef } from "react";

const stats = [
  { label: "Surgeries", value: "10" },
  { label: "Years of", highlight: "Dialysis", value: "3" },
  { label: "Right Leg", highlight: "Amputation" },
  { label: "Kidney Transplant", highlight: "Survivor" },
  { label: "Life-long", highlight: "Clean Intermittent Catheterization" },
];

export default function FeaturedVideo() {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;
    if (video.paused) {
      video.play();
      wrap.classList.add("playing");
    } else {
      video.pause();
      wrap.classList.remove("playing");
    }
  };

  return (
    <>
      {/* Stats ticker bar */}
      <div className="stats-ticker-bar">
        <div className="stats-ticker-track">
          {/* Render twice for seamless loop */}
          {[...stats, ...stats].map((stat, i) => (
            <span key={i} className="stats-ticker-item">
              {stat.value && (
                <span className="stats-ticker-value">{stat.value}</span>
              )}{" "}
              {stat.label && !stat.highlight && (
                <span>{stat.label}</span>
              )}
              {stat.label && stat.highlight && (
                <>
                  <span className="stats-ticker-yellow">{stat.label}</span>{" "}
                  <span>{stat.highlight}</span>
                </>
              )}
              {!stat.label && stat.highlight && (
                <span className="stats-ticker-yellow">{stat.highlight}</span>
              )}
              <span className="stats-ticker-dot">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Featured video */}
      <section className="featured-video-section">
        <div className="featured-video-wrap" ref={wrapRef} onClick={togglePlay}>
          <video
            ref={videoRef}
            className="featured-video-player"
            src="/videos/featured.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          ></video>
          <div className="featured-play-wrap" id="featuredPlayBtn">
            <div className="featured-play-btn">&#9654;</div>
          </div>
        </div>
      </section>
    </>
  );
}
