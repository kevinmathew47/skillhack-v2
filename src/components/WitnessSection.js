import Link from "next/link";

export default function WitnessSection() {
  return (
    <section id="about" className="witness-section">

      {/* Full-width handwritten title at top */}
      <div className="witness-heading-row">
        <h2 className="hero-handwritten witness-main-title">A Life Above Limits</h2>
      </div>

      {/* 3-column body */}
      <div className="witness-body">

        {/* Left Column: My Mission */}
        <div className="witness-left">
          <h3 className="witness-col-title">My Mission</h3>
          <div className="witness-mission-list">
            <div className="witness-mission-item">
              <span className="witness-mission-highlight">FAI Indoor Skydiving</span> World Championship &amp; World Cups
            </div>
            <div className="witness-mission-item">
              <span className="witness-mission-highlight">Tom Cruise</span> Cliff Jump
            </div>
            <div className="witness-mission-item">
              <span className="witness-mission-highlight">42000ft</span> Wingsuit Flying
            </div>
            <div className="witness-mission-item">
              <span className="witness-mission-highlight">Life Story</span> Docufiction
            </div>
          </div>
          <div className="witness-btns">
            <Link href="/fund" className="btn-fund-dream-sm">Fuel my dream</Link>
          </div>
        </div>

        {/* Center Column: Photo with yellow splash */}
        <div className="witness-center">
          <div className="kerala-map-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="kerala-map-img"
              src="/images/vector.png"
              alt="Kerala state outline map"
            />
          </div>
          <div className="witness-photo-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="witness-photo"
              src="/images/highlight-image.png"
              alt="Syam Kumar"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Achievements */}
        <div className="witness-right">
          <h3 className="witness-col-title">Achievements</h3>
          <div className="witness-mission-list">
            <div className="witness-mission-item">
              <span className="witness-mission-highlight">100+</span> Solo Skydiving
            </div>
            <div className="witness-mission-item">
              <span className="witness-mission-highlight">1000 Km</span> Cycling in 6 days
            </div>
          </div>
          <div className="witness-achievement-btn">
            <Link href="/about" className="btn-read-story">Read my story</Link>
          </div>
        </div>

      </div>
    </section>
  );
}
