"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FundCTA from "@/components/FundCTA";
import useMilaapFetch from "@/hooks/useMilaapFetch";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function LearnPage() {
  const { raisedText, goalText, fillWidth, supportersCount } = useMilaapFetch();
  useScrollAnimations();

  const learnItems = [
    {
      title: "Skydiving",
      description: "Experience the ultimate freedom of flight. Syam, an adaptive skydiver, shares his journey and offers guidance for those looking to defy gravity.",
      image: "/images/skydiving.JPG",
      whatsappMsg: "Hi Syam, I'm interested in learning more about Skydiving!"
    },
    {
      title: "Calisthenics",
      description: "Master your bodyweight. Learn the fundamentals of strength, balance, and control from someone who has rebuilt his physical capabilities from scratch.",
      image: "/images/handstand.jpg",
      whatsappMsg: "Hi Syam, I'm interested in learning more about Calisthenics!"
    },
    {
      title: "Scuba Diving",
      description: "Dive into the depths. Discover the serene world underwater and learn adaptive diving techniques that prove the ocean is accessible to everyone.",
      image: "/images/scubadiving.JPG",
      whatsappMsg: "Hi Syam, I'm interested in learning more about Scuba Diving!"
    },
    {
      title: "Paragliding",
      description: "Soar with the winds. Get insights into the world of paragliding and how to start your journey into the skies.",
      image: "/images/paragliding.jpg",
      whatsappMsg: "Hi Syam, I'm interested in learning more about Paragliding!"
    }
  ];

  const getWhatsAppLink = (message) => {
    return `https://wa.me/917907424988?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="learn-page redesign">

      <main className="learn-content">
        <section className="learn-hero-redesign">
          <div className="container">
            <span className="hero-greeting" style={{ color: 'var(--black)', opacity: 0.6 }}>Explore the limits</span>
            <h1 className="hero-handwritten learn-hero-title" style={{ color: 'var(--yellow)' }}>
              Learn with me
            </h1>
            <p className="about-vision-intro" style={{ maxWidth: '750px', margin: '0 auto', color: 'var(--gray-text)', fontSize: '1.2rem' }}>
              Beyond the records and the jumps, my mission is to share the skills and
              mindset that have shaped my life. Whether you are looking for adventure
              or seeking to push your physical and mental limits, let&apos;s start the journey.
            </p>
          </div>
        </section>


        {/* Section 01: Skydiving */}
        <section className="sport-section skydiving-section">
          <div className="sport-bg-image-wrap">
            <img src="/images/skydiving.JPG" alt="Skydiving" className="sport-bg-image" />
            <div className="sport-overlay-dark"></div>
          </div>
          <div className="sport-container container">
            <div className="sport-content-box left">
              <span className="sport-number">01</span>
              <h2 className="sport-title">Skydiving</h2>
              <p className="sport-text">
                Experience the ultimate freedom of flight. Syam, an adaptive skydiver,
                shares his journey and offers guidance for those looking to defy gravity.
                Learn about safety, technique, and the mindset required for the jump.
              </p>
              <a
                href={getWhatsAppLink(learnItems[0].whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-large"
              >
                Book a Session
              </a>
            </div>
          </div>
        </section>

        {/* Section 02: Calisthenics */}
        <section className="sport-section calisthenics-section alternating">
          <div className="sport-container container">
            <div className="sport-grid-2">
              <div className="sport-content-box pt-0">
                <span className="sport-number text-dark">02</span>
                <h2 className="sport-title text-dark">Calisthenics</h2>
                <p className="sport-text text-dark">
                  Master your bodyweight. Learn the fundamentals of strength, balance,
                  and control from someone who has rebuilt his physical capabilities
                  from scratch. Adaptive techniques for every level.
                </p>
                <a
                  href={getWhatsAppLink(learnItems[1].whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-large"
                >
                  Book a Session
                </a>
              </div>
              <div className="sport-image-box">
                <img src="/images/handstand.jpg" alt="Calisthenics" className="sport-featured-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Scuba Diving */}
        <section className="sport-section scuba-section">
          <div className="sport-bg-image-wrap">
            <img src="/images/scubadiving.JPG" alt="Scuba Diving" className="sport-bg-image" />
            <div className="sport-overlay-darker"></div>
          </div>
          <div className="sport-container container">
            <div className="sport-content-box right">
              <span className="sport-number">03</span>
              <h2 className="sport-title">Scuba Diving</h2>
              <p className="sport-text">
                Dive into the depths. Discover the serene world underwater and learn
                adaptive diving techniques that prove the ocean is accessible to
                everyone. Explore a new dimension of freedom.
              </p>
              <a
                href={getWhatsAppLink(learnItems[2].whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-large"
              >
                Book a Session
              </a>
            </div>
          </div>
        </section>

        {/* Section 04: Paragliding */}
        <section className="sport-section paragliding-section alternating bg-off-white">
          <div className="sport-container container">
            <div className="sport-grid-2">
              <div className="sport-image-box order-2-mobile">
                <img src="/images/paragliding.jpg" alt="Paragliding" className="sport-featured-img" />
              </div>
              <div className="sport-content-box pt-0">
                <span className="sport-number text-dark">04</span>
                <h2 className="sport-title text-dark">Paragliding</h2>
                <p className="sport-text text-dark">
                  Soar with the winds. Get insights into the world of paragliding and
                  how to start your journey into the skies. Experience flight in its
                  purest form.
                </p>
                <a
                  href={getWhatsAppLink(learnItems[3].whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-large"
                >
                  Book a Session
                </a>
              </div>
            </div>
          </div>
        </section>

        <FundCTA
          raisedText={`${raisedText} raised`}
          goalText={`Goal: ${goalText}`}
          fillWidth={fillWidth}
          supportersCount={supportersCount}
        />
      </main>

      <Footer />
    </div>
  );
}
