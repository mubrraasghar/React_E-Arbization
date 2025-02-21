
import React, { useState } from "react";
import YouTube from "react-youtube";
import "../styles/MissionSection.css";

const MissionSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const opts = {
    height: "360",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* Video Section */}
        <div className="video-wrapper" onClick={() => setIsPlaying(true)}>
          <img src="/assets/video-img.jpg" alt="Mission Video" className="video-thumbnail" />
          <div className="play-button">▶</div>
        </div>

        {/* Text Section */}
        <div className="mission-text">
          <div className="watermark-container">
          <img src="/assets/watermark_.svg" alt="Watermark" className="watermark" />

            <div className="text-content">
              <h2>Our Mission in 60 Seconds</h2>
              <p>
                We pride ourselves on going above and beyond to meet our clients' needs.
                </p>
                <p>
                Let us help you break down language and cultural barriers to grow internationally.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="video-modal">
          <div className="video-modal-content">
            <span className="close-button" onClick={() => setIsPlaying(false)}>✖</span>
            <YouTube videoId="a8kRaxwfOwE" opts={opts} className="youtube-player" />
          </div>
        </div>
      )}
    </section>
  );
};

export default MissionSection;
