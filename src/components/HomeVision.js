"use client";

import Link from "next/link";

export default function HomeVision() {
  const items = [
    {
      number: 1,
      text: "Developing a high-impact prosthetic leg",
    },
    {
      number: 2,
      text: "Advanced rehabilitation centre for paralysed individuals",
    },
    {
      number: 3,
      text: "Research Centre for Bio – Augmentation Technology, Precision Medicine, and Genomics",
    },
  ];

  return (
    <section className="home-vision-section">
      <h2 className="hero-handwritten home-vision-title">My Vision</h2>

      <div className="home-vision-grid">
        {items.map((item) => (
          <div key={item.number} className="home-vision-item">
            <div className="home-vision-number">{item.number}</div>
            <p className="home-vision-item-text">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="home-vision-btn-wrap">
        <Link href="/about#vision" className="home-vision-btn">
          Know More
        </Link>
      </div>
    </section>
  );
}
