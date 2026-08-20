import React from "react";
import { AudioPlayerTooltip } from "./AudioPlayerTooltip";

export const AudioPlayerLayoutDemo = () => {
  return (
    <div className="audio-player-wrapper">
      <div className="audio-player-card">
        
        <div className="player-track-info">
          <div className="track-art-placeholder" />
          <div className="track-meta">
            <span className="track-title">Ethereal Motion</span>
            <span className="track-artist">EaseMotion Synth</span>
          </div>
        </div>

        <div className="player-controls">
          <AudioPlayerTooltip label="Previous Track" position="top">
            <button className="control-btn" aria-label="Previous Track">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
            </button>
          </AudioPlayerTooltip>

          <AudioPlayerTooltip label="Play / Pause" position="top">
            <button className="control-btn play-btn" aria-label="Play Track">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </AudioPlayerTooltip>

          <AudioPlayerTooltip label="Next Track" position="top">
            <button className="control-btn" aria-label="Next Track">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="m6 18 8.5-6L6 6zm9-12v12h2V6z"/></svg>
            </button>
          </AudioPlayerTooltip>
        </div>

        <div className="player-progress-container">
          <span className="time-stamp">1:24</span>
          <div className="progress-bar-rail">
            <div className="progress-bar-fill" style={{ width: "45%" }}>
              <AudioPlayerTooltip label="01:24" position="top" delay={0}>
                <div className="progress-thumb" tabIndex="0" aria-label="Playback Progress" />
              </AudioPlayerTooltip>
            </div>
          </div>
          <span className="time-stamp">3:12</span>
        </div>

        <div className="player-volume-wrapper">
          <AudioPlayerTooltip label="Mute Audio" position="left">
            <button className="control-btn volume-icon" aria-label="Mute Audio">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
            </button>
          </AudioPlayerTooltip>
          <div className="volume-rail">
            <div className="volume-fill" style={{ width: "70%" }} />
          </div>
        </div>

      </div>
    </div>
  );
};