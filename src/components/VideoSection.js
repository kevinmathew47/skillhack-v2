"use client";

import { useState } from "react";

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: "WkTEp1MdOnw",
      name: "Andy Pine",
      role: "Chief Instructor"
    },
    {
      id: "pV9OerNwpdk",
      name: "Jonneke Van Dooren",
      role: "AFF Instructor"
    },
    {
      id: "9JXt6NK0rZA",
      name: "Havish",
      role: "Wind Tunnel Instructor"
    }
  ];

  const openModal = (videoId) => {
    setActiveVideo(videoId);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveVideo(null);
    document.body.style.overflow = "";
  };

  const handleKeyDown = (e, videoId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(videoId);
    }
  };

  return (
    <>
      <section id="journey" className="video-section">
        <div className="video-section-blend"></div>
        <div className="video-section-content">
          <p className="video-intro-text">
            These testimonials showcase Syam&apos;s incredible journey from medical trauma to sky mastery.<br />
            Each video tells a part of the story that proves human potential has no ceiling.
          </p>
          <div className="video-grid">
            {videos.map((video, index) => (
              <div
                key={index}
                className="video-card"
                tabIndex={0}
                aria-label="Play video"
                onClick={() => openModal(video.id)}
                onKeyDown={(e) => handleKeyDown(e, video.id)}
              >
                <div 
                  className="video-thumb-v2" 
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${video.id}/maxresdefault.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none'
                  }}
                >
                  <div className="play-icon-v2">
                    <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))' }}>
                      <path d="M8 5V19L19 12L8 5Z" />
                    </svg>
                  </div>
                </div>
                <p className="video-caption-v2">
                  {video.name}<br />
                  <span style={{ fontSize: '0.85em', opacity: 0.75 }}>{video.role}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video modal */}
      <div
        className={`video-modal${activeVideo ? " open" : ""}`}
        id="videoModal"
        onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        style={{
          display: activeVideo ? 'flex' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          zIndex: 99999,
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem'
        }}
      >
        <div 
          className="video-modal-inner"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1000px',
            aspectRatio: '16/9',
            backgroundColor: '#000',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          <button 
            className="modal-close" 
            onClick={closeModal}
            aria-label="Close video"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'rgba(0,0,0,0.55)',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              lineHeight: 1,
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            ✕
          </button>
          
          {activeVideo && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}
