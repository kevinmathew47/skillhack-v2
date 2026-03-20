import Link from 'next/link';
import { newsData } from '@/data/newsData';

export default function NewsSection() {

  return (
    <section id="news" className="news-section">
      <div 
        className="hero-handwritten text-center news-section-title" 
        style={{ position: 'relative', bottom: 'auto', width: '100%', marginBottom: '3rem' }}
      >
        In The News
      </div>

      <div className="news-header-row">
        <h2 className="news-header-title">
          News, Stories, Updates, and<br />Highlights From My Ongoing<br />Journey
        </h2>
        <p className="news-header-desc">
          Stay updated with the latest<br />developments, experiences, and<br />personal milestones
        </p>
      </div>

      <div className="news-grid">
        {newsData.slice(0, 4).map((item, i) => (
          <div className="news-card" key={i}>
            <div 
              className="news-card-img" 
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <h4 className="news-card-title">{item.title}</h4>
            <p className="news-card-desc">
              {item.desc}
            </p>
            <Link href={item.url} target="_blank" rel="noopener noreferrer" className="news-card-btn" style={{ display: 'inline-block', textAlign: 'center', marginTop: 'auto' }}>
              read more
            </Link>
          </div>
        ))}
      </div>

      <div className="news-actions text-center mt-12 mb-8 flex gap-4 justify-center">
        <Link href="/news">
          <button className="btn-fund">view more</button>
        </Link>
        <a 
          href="https://milaap.org/fundraisers/support-syam-kumar-s-s?utm_source=syamkumar-site" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="btn-outline-dark" style={{ borderColor: 'var(--yellow)' }}>Fuel my dream</button>
        </a>
      </div>
    </section>
  );
}
