"use client";

export default function AboutVision() {
  const visions = [
    {
      title: "Now - Engineering the Impossible",
      text: "Developing adaptive systems that don't exist yet: a high-impact prosthetic leg for motocross, a hand-controlled aerodynamic leg for wing suit flight, and a thermal life-support suit for stratospheric free fall. Every piece of technology he builds is designed to be scalable - a blueprint for adaptive athletes worldwide, not just a tool for one jump."
    },
    {
      title: "Next - Rebuilding Human Dignity",
      text: "A rehabilitation centre for paralysed individuals and people with visible and invisible disabilities - built around robotics-assisted recovery, neuromuscular retraining, and performance-based rehabilitation. Not just getting people mobile. Getting them back to themselves."
    },
    {
      title: "Future - Redesigning the Human Body",
      text: "Research into mechanical urological solutions to eliminate catheter dependency. Neural robotic mobility systems. Nanobots for targeted treatment. Genomics for organ failure prevention. Syam has lived every limitation these technologies would solve. He intends to help solve them."
    }
  ];

  return (
    <section id="vision" className="about-vision-section">
      <div className="about-vision-header">
        <h2 className="hero-handwritten text-center" style={{ position: 'relative', margin: '0 0 1rem' }}>
          My Vision
        </h2>
        <p className="about-vision-intro">
          I am not chasing records. I&apos;m building a proof of concept - that bodies
          shaped by adversity can become platforms for technological progress.
          <br />
          My vision has three horizons:
        </p>
      </div>

      <div className="about-vision-grid">
        <div className="vision-row">
          <div className="vision-card">
            <h3 className="vision-card-title">{visions[0].title}</h3>
            <p className="vision-card-text">{visions[0].text}</p>
          </div>
          <div className="vision-card">
            <h3 className="vision-card-title">{visions[1].title}</h3>
            <p className="vision-card-text">{visions[1].text}</p>
          </div>
        </div>
        <div className="vision-row center-row">
          <div className="vision-card">
            <h3 className="vision-card-title">{visions[2].title}</h3>
            <p className="vision-card-text">{visions[2].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
