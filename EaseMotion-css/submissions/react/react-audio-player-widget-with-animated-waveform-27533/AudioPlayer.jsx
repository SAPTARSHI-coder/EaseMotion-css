import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const AudioPlayer = ({ title = "Audio Track", duration = "03:45" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  // Simulate audio playback progress
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  return (
    <div className="easemotion-audio-container">
      <div className="audio-header">
        <span className="audio-title">{title}</span>
        <span className="audio-time">{isPlaying ? "01:24" : duration}</span>
      </div>

      <div className="waveform-container">
        {/* Generate 30 bars for the waveform visualization */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className={`wave-bar ${isPlaying ? 'animate' : ''}`} 
            style={{ 
              height: `${Math.random() * 60 + 20}%`,
              animationDelay: `${i * 0.05}s` 
            }}
          />
        ))}
      </div>

      <div className="controls">
        <button 
          className="play-btn" 
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <div className="progress-bar-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;