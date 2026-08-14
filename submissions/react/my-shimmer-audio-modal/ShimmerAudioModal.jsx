import React, { useState } from "react";
import "./style.css";

const ShimmerAudioModal = ({
  title = "Audio Player",
  children = "Enjoy your music with a smooth animated audio experience.",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="ease-hover-lift audio-open-btn"
        onClick={() => setOpen(true)}
      >
        Open Player
      </button>

      {open && (
        <div className="audio-overlay ease-fade-in">
          <div className="audio-modal">

            <div className="shimmer-wave"></div>

            <button
              className="audio-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <div className="audio-content">

              <div className="album-icon">
                🎵
              </div>

              <h2>{title}</h2>

              <p>{children}</p>

              <div className="player-controls">
                <button>⏮</button>
                <button className="play-btn">▶</button>
                <button>⏭</button>
              </div>

              <button
                className="audio-action ease-hover-lift"
                onClick={() => setOpen(false)}
              >
                Close Player
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ShimmerAudioModal;