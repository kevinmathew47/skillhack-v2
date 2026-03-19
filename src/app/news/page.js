import Footer from "@/components/Footer";
import Link from "next/link";
import { newsData } from "@/data/newsData";

export default function NewsPage() {

  return (
    <>
      <main className="news-page-main">
        <div className="news-page-header-row" style={{ paddingTop: '3rem' }}>
          <div className="news-page-title-wrap">
            <h1 className="news-page-title">News & Articles</h1>
            <p className="news-page-subtitle">Stories from my journey</p>
          </div>
          <p className="news-page-desc">
            Media coverage, interviews, and articles highlighting my journey, achievements, and mission.
          </p>
        </div>

        <div className="news-grid news-page-grid">
          {newsData.map((item, i) => (
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
      </main>
      <Footer />
    </>
  );
}
