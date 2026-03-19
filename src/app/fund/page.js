"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useMilaapFetch from "@/hooks/useMilaapFetch";

export default function FundPage() {
  const { raisedText, goalText, fillWidth, pct, supportersCount } = useMilaapFetch();
  const btnRef = useRef(null);

  const handleDonate = () => {
    const milaapBase = "https://milaap.org/fundraisers/support-syam-kumar-s-s";
    const url = `${milaapBase}?utm_source=syamkumar-site`;

    const btn = btnRef.current;
    if (btn) {
      btn.textContent = "Redirecting to Milaap… 🚀";
      btn.style.opacity = "0.8";
      btn.disabled = true;
    }

    setTimeout(() => {
      window.open(url, "_blank");
      if (btn) {
        btn.innerHTML = 'Donate to Syam\'s Dream <span class="arrow">→</span>';
        btn.style.opacity = "";
        btn.disabled = false;
      }
    }, 900);
  };

  return (
    <div className="fund-page-body">
      {/* Decorative blobs */}
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>

      {/* Top nav */}
      <nav className="top-nav">
        <Link href="/" className="top-nav-logo">Syam</Link>
        <Link href="/" className="top-nav-back">← Back to site</Link>
      </nav>

      <main className="fund-page-main">
        <div className="fund-card">
          <div className="fund-badge">Mission Fundraiser</div>

          <h1 className="fund-heading">
            Help Syam <span>Reach<br />The Sky</span>
          </h1>
          <p className="fund-subtext">
            Syam Kumar is set to become the first person without a leg to skydive from 45,000 feet.
            Your support makes this world record mission possible.
          </p>

          {/* Live Milaap progress - THE SPOTLIGHT */}
          <div className="progress-block spotlight-block">
            <div className="progress-numbers">
              <span className="raised-amount">{raisedText}</span>
              <span className="goal-amount">of {goalText} goal</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" id="fundFill" style={{ width: fillWidth }}></div>
            </div>
            <div className="progress-meta">
              <span>{pct}% funded</span>
            </div>
          </div>

          {/* Supporters Display - Secondary */}
          <div className="supporters-showcase-lite">
            <div className="supporters-count-medium">{supportersCount}</div>
            <div className="supporters-label-sm">Amazing Supporters</div>
          </div>

          <button ref={btnRef} className="donate-cta" onClick={handleDonate}>
            Donate to Syam&apos;s Dream <span class="arrow">→</span>
          </button>

          <p className="fund-note">
            You will be securely redirected to Milaap to complete your donation. Your details are safe.
          </p>

          <div className="powered-by">
            Payments powered by{" "}
            <a href="https://milaap.org" target="_blank" rel="noopener noreferrer">Milaap.org</a>
          </div>

          {/* Trust badges */}
          <div className="trust-row">
            <div className="trust-item">🔒 SSL Secure</div>
            <div className="trust-item">🇮🇳 INR Only</div>
            <div className="trust-item">✅ Tax Benefits</div>
          </div>
        </div>
      </main>
    </div>
  );
}
