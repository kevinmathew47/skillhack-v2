"use client";

import Link from "next/link";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function AboutTimeline() {
  useScrollAnimations();

  const steps = [
    {
      num: 1,
      title: "Born Into the Odds",
      text: (
        <>
          <p>
            Syam Kumar S.S. was born in Kattakkada, Kerala, with a body that doctors
            knew would face extraordinary odds.
          </p>
          <p>
            He entered life with multiple congenital conditions: spina bifida
            (lipomeningocele), congenital scoliosis, neurogenic bladder, a duplex renal
            system resulting in three kidneys, and a severely underdeveloped right leg. At
            just nineteen days old, emergency surgery was required after urinary
            retention threatened fatal toxin buildup.
          </p>
          <p>
            Childhood unfolded between hospitals and operating rooms. By school age he
            had learned Clean Intermittent Catheterisation (CIC) to manage bladder
            function and protect his kidneys. At eight years old, the severely
            underdeveloped right leg was surgically amputated to improve mobility.
          </p>
          <p>Survival was achieved early. Certainty never was.</p>
        </>
      ),
      isRight: false,
    },
    {
      num: 2,
      title: "Motion as Defiance",
      text: (
        <>
          <p>
            Adolescence brought both isolation and physical strain. Walking with one
            biological limb while managing spinal complications demanded constant
            effort, while bullying and medical challenges made school life difficult.
          </p>
          <p>
            At the same time, doctors began warning of progressive kidney failure.
          </p>
          <p>
            Cycling entered his life almost accidentally. Bought using disability pension
            savings and maintained through skills he taught himself, the bicycle became a
            form of freedom.
          </p>
          <p>
            In 2019, during the Save Alappad protest, he rode roughly 230 kilometers in 12
            hours, despite internal bleeding caused by catheter trauma.
          </p>
          <p>Movement had stopped being therapy.</p>
          <p>It had become defiance.</p>
        </>
      ),
      isRight: true,
    },
    {
      num: 3,
      title: "The Sky as Reclamation",
      text: (
        <>
          <p>
            By sixteen, Syam&apos;s kidney function had dropped below 25 percent. Surgeries
            followed, including bladder augmentation in Bengaluru, as doctors prepared
            him for eventual dialysis.
          </p>
          <p>
            In 2020, he attempted a solo cycling journey of more than 1,000 kilometers
            across Kerala. The ride ended in Kannur, where his body collapsed into full
            kidney failure.
          </p>
          <p>Dialysis began in 2021.</p>
          <p>
            A year later came his sixteenth major surgery, a kidney transplant with his
            mother as donor. The procedure succeeded, introducing lifelong
            immunosuppression but restoring the possibility of movement.
          </p>
          <p>He used it immediately.</p>
          <p>
            In 2023 he trained in a wind tunnel in Hyderabad before completing a solo
            skydive from 13,000 feet in Thailand. The feat earned recognition from the
            International Book of Records, including youngest solo amputee skydiver from
            13,000 ft and youngest paragliding pilot with a prosthetic leg.
          </p>
          <p>By 2024 he developed a one-leg freefall method, skydiving without a prosthetic.</p>
          <p>The sky was no longer a boundary.</p>
          <p>It was reclamation.</p>
        </>
      ),
      isRight: false,
    },
    {
      num: 4,
      title: "What the Future Holds",
      text: (
        <>
          <p>
            Today, Syam has completed 100+ skydives and holds a B-license as a skydiver,
            but the numbers are not the mission.
          </p>
          <p>
            His work is shifting toward adaptive performance engineering, designing new
            ways for the human body to operate beyond conventional limits.
          </p>
          <p>
            Current projects include developing techniques for one-leg wingsuit flight and
            designing an adaptive motocross impact leg capable of handling extreme
            terrain and high-impact landings.
          </p>
          <p>
            Alongside this work, he is documenting the journey through filmmaking while
            exploring collaborations with aerospace and performance engineering
            communities.
          </p>
          <p>What began as a fight for survival has evolved into something larger.</p>
          <p>Not a story about overcoming disability.</p>
          <p>A mission to redefine what the human body can be capable of.</p>
        </>
      ),
      isRight: true,
    },
  ];

  return (
    <section className="about-timeline-section">
      <div className="about-timeline-header">
        <h2 className="about-timeline-main-title text-center">
          This is not a story about disability.
        </h2>
        <p className="about-timeline-subtitle text-center">
          It is a story about engineering the impossible.
        </p>
      </div>

      <div className="about-timeline-container">
        {steps.map((step, index) => (
          <div key={index} className={`about-timeline-card ${step.isRight ? "right-aligned" : ""}`}>
            <div className="timeline-num-container">
              <div className="timeline-num-circle">
                <span className="timeline-num">{step.num}</span>
              </div>

              <svg
                className={`timeline-arrow ${step.isRight ? "arrow-right" : "arrow-left"}`}
                viewBox="0 0 180 100"
                preserveAspectRatio="xMidYMid meet"
              >
                {step.isRight ? (
                  <path
                    d="M 140 30 C 100 0, 60 10, 40 70"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeDasharray="6,5"
                    markerEnd="url(#arrowhead-right)"
                  />
                ) : (
                  <path
                    d="M 40 30 C 80 0, 120 10, 140 70"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeDasharray="6,5"
                    markerEnd="url(#arrowhead-left)"
                  />
                )}
                <defs>
                  <marker id="arrowhead-left" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="black" />
                  </marker>
                  <marker id="arrowhead-right" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
                    <path d="M8,0 L8,6 L0,3 z" fill="black" />
                  </marker>
                </defs>
              </svg>

              <h3 className="timeline-title">{step.title}</h3>
            </div>

            <div className="timeline-content">{step.text}</div>
          </div>
        ))}

        <div className="timeline-cta-container">
          <Link href="/fund" className="btn-fund timeline-cta-btn">
            Be Part of What Comes Next
          </Link>
        </div>
      </div>
    </section>
  );
}
