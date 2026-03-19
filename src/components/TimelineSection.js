import Link from "next/link";

export default function TimelineSection() {
  return (
    <section id="journey" className="timeline-section" style={{ position: 'relative', paddingTop: '8rem' }}>
      <div 
        className="hero-handwritten text-center" 
        style={{ position: 'absolute', top: '2rem', left: '0', right: '0', bottom: 'auto', marginBottom: '3rem', width: '100%', zIndex: 10 }}
      >
        My Journey So Far
      </div>
      {/* Large card – Age 0 */}
      <div className="tcard tcard-large">
        <div
          className="tcard-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1600&q=80')" }}
        ></div>
        <div className="tcard-overlay"></div>
        <div className="tcard-body">
          <h3 className="tcard-title">Age 0: Biological Mutiny - The Body That Fought Its Design</h3>
          <p className="tcard-text">
            Kulathummal Village, Kerala. 2001. Normal delivery for 47 seconds. Then silence fell
            across the delivery room. Right leg twisted, fused toward buttocks. Blue spinal mark stained his spine like
            spilled ink. Spina bifida lipomeningocele. Three kidneys. Neurogenic bladder. Survival odds: 23%. This wasn&apos;t
            birth - this was biological mutiny. The war between Syam and his own body had begun.
          </p>
        </div>
      </div>

      {/* Three smaller cards */}
      <div className="tcard-row">
        <div className="tcard tcard-sm tcard-green">
          <div
            className="tcard-bg"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526676037777-05a232554f77?w=600&q=80')" }}
          ></div>
          <div className="tcard-overlay"></div>
          <div className="tcard-body">
            <h3 className="tcard-title">Age 8: The Choice - Operation Room #7</h3>
            <p className="tcard-text">
              An infection climbed Syam&apos;s leg at age eight. Doctors gave a choice: lose the leg or
              lose his life. He chose to live.
            </p>
          </div>
        </div>
        <div className="tcard tcard-sm tcard-teal">
          <div
            className="tcard-bg"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=600&q=80')" }}
          ></div>
          <div className="tcard-overlay"></div>
          <div className="tcard-body">
            <h3 className="tcard-title">Age 22: Gravity Defied - 13,000ft World Record</h3>
            <p className="tcard-text">
              Doctors said rest. Society said stay safe. Syam jumped from 13,000 ft without a
              prosthetic—and made the sky his proving ground.
            </p>
          </div>
        </div>
        <div className="tcard tcard-sm tcard-navy">
          <div
            className="tcard-bg"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436262513933-a0b06755c784?w=600&q=80')" }}
          ></div>
          <div className="tcard-overlay"></div>
          <div className="tcard-body">
            <h3 className="tcard-title">Age 25: Sky Beyond Limits - 43,000ft Mission</h3>
            <p className="tcard-text">
              ₹3.6 crore mission. A custom adaptive wingsuit and flight prosthetic. Three world
              records from 43,000+ feet. The sky was never the limit.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
        <Link href="/about" className="btn-outline-dark">
          More About Me
        </Link>
      </div>
    </section>
  );
}
