"use client";

import { useEffect, useRef } from "react";

export default function useScrollAnimations() {
  const observed = useRef(false);

  useEffect(() => {
    // Add a small delay to ensure Next.js route transition
    // and scroll restoration are complete before observing
    const timer = setTimeout(() => {
      const fadeEls = document.querySelectorAll(
        ".witness-section, .video-section, .featured-video-section, " +
        ".projects-section, .timeline-section, .gallery-section, " +
        ".mission-section, .fund-section, .news-section, " +
        ".tcard, .video-card, .gallery-item, .gallery-main, .project-card, " +
        ".phase-wrap, .news-card"
      );

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in", "visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      fadeEls.forEach((el, i) => {
        // Only add fade-in if not already visible to avoid flicker
        if (!el.classList.contains("visible")) {
          el.classList.add("fade-in");
          el.style.transitionDelay = `${(i % 4) * 0.07}s`;
        }
        io.observe(el);
      });

      // Cleanup IntersectionObserver inside the timeout
      return () => io.disconnect();
    }, 150);

    // Yellow orb mouse-follow parallax
    const handleMouseMove = (e) => {
      const orbs = document.querySelectorAll(".hero-orb");
      const x = (e.clientX / window.innerWidth - 0.5) * 22;
      const y = (e.clientY / window.innerHeight - 0.5) * 22;
      orbs.forEach((orb, i) => {
        const f = i % 2 === 0 ? 1 : -1;
        orb.style.transform = `translate(${x * f * 0.5}px, ${y * f * 0.5}px)`;
      });
    };
    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
}
