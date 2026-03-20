import Link from "next/link";

export default function FundCTA({ raisedText, goalText, fillWidth, supportersCount }) {
  return (
    <section id="fund" className="fund-section">
      <div className="fund-inner">
        <h2 className="fund-title">Support Syam&apos;s<br />Mission</h2>
        <p className="fund-desc">
          Every contribution brings Syam one step closer to the sky. Join {supportersCount}+ believers and help make history.
        </p>
        <div className="fund-progress-wrap">
          <div className="fund-bar">
            <div className="fund-fill" style={{ width: fillWidth }}></div>
          </div>
          <div className="fund-labels">
            <span>{raisedText}</span>
            <span>{goalText}</span>
          </div>
        </div>
        <a 
          href="https://milaap.org/fundraisers/support-syam-kumar-s-s?utm_source=syamkumar-site" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-fund fund-btn"
        >
          Fuel my dream
        </a>
      </div>
    </section>
  );
}
