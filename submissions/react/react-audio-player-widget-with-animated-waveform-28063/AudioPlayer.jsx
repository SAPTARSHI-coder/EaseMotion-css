import React, { useState, useEffect } from 'react';

/**
 * Audio Player Widget with Animated Waveform
 * 
 * @param {String} title - Track title
 * @param {String} artist - Track artist
 * @param {String} coverUrl - URL for album art
 * @param {Number} duration - Total duration in seconds (mocked for demo if no real audio src)
 */
const AudioPlayer = ({ 
  title = "Unknown Track", 
  artist = "Unknown Artist", 
  coverUrl = "", 
  duration = 180 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100

  // Mock progress simulation
  useEffect(() => {
    let interval;
    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + (100 / duration), 100));
      }, 1000);
    } else if (progress >= 100) {
      setIsPlaying(false);
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress, duration]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  // Generate 40 waveform bars
  const generateWaveform = () => {
    const bars = [];
    for (let i = 0; i < 40; i++) {
      // Random height between 20% and 100% to simulate a waveform
      const minHeight = 20;
      const height = minHeight + Math.random() * (100 - minHeight);
      
      // A bar is "filled" if its index represents a percentage less than the current progress
      const isFilled = (i / 40) * 100 <= progress;
      
      bars.push(
        <div 
          key={i} 
          className={`ease-audio-bar ${isFilled ? 'is-filled' : ''} ${isPlaying ? 'is-animated' : ''}`}
          style={{ 
            height: `${height}%`,
            // Stagger animation delays for organic feel
            animationDelay: isPlaying ? `${Math.random() * -1.5}s` : '0s'
          }}
        />
      );
    }
    return bars;
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentTime = (progress / 100) * duration;

  return (
    <div className="ease-audio-widget">
      {/* Cover Art with Spin Animation */}
      <div className="ease-audio-cover-wrapper">
        <div className={`ease-audio-cover ${isPlaying ? 'is-spinning' : ''}`}>
          {coverUrl ? (
            <img src={coverUrl} alt={`${title} cover`} />
          ) : (
            <div className="ease-audio-cover-fallback">🎵</div>
          )}
          {/* Inner hole to make it look like a vinyl record */}
          <div className="ease-audio-cover-hole" />
        </div>
      </div>

      <div className="ease-audio-content">
        <div className="ease-audio-header">
          <div className="ease-audio-meta">
            <h3 className="ease-audio-title">{title}</h3>
            <p className="ease-audio-artist">{artist}</p>
          </div>
          
          <button 
            className={`ease-audio-play-btn ${isPlaying ? 'is-playing' : ''}`}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            )}
          </button>
        </div>

        {/* Waveform Visualization */}
        <div className="ease-audio-waveform-container" aria-hidden="true">
          {generateWaveform()}
        </div>

        {/* Timestamps */}
        <div className="ease-audio-timestamps">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
