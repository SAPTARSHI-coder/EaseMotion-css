import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * Audio Player Widget with Animated Waveform
 * 
 * A sleek, modern audio player component utilizing CSS animations for a 
 * simulated audio waveform. It falls back to standard EaseMotion classes 
 * for tactile button feedback.
 */
const AudioPlayer = ({ 
  audioSrc, 
  title = "Unknown Track", 
  artist = "Unknown Artist", 
  coverArt = "",
  autoPlay = false
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Toggle Play/Pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  // Set duration once metadata is loaded
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Seek functionality
  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const seekPosition = e.target.value;
    const newTime = (seekPosition / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(seekPosition);
  };

  // Format time (e.g., 65 -> 1:05)
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const m = Math.floor(timeInSeconds / 60);
    const s = Math.floor(timeInSeconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Handle external play/pause events (e.g., spacebar)
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => setIsPlaying(false);
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, []);

  // Generate 12 waveform bars for the visualizer
  const waveformBars = Array.from({ length: 12 });

  return (
    <div className="audio-widget-container ease-fade-in">
      <audio 
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      
      <div className="audio-info">
        {coverArt ? (
          <img src={coverArt} alt={`${title} cover`} className="audio-cover" />
        ) : (
          <div className="audio-cover-placeholder">
            <span className="note-icon">🎵</span>
          </div>
        )}
        <div className="audio-meta">
          <h3 className="audio-title">{title}</h3>
          <p className="audio-artist">{artist}</p>
        </div>
      </div>

      {/* Animated Waveform Visualizer */}
      <div className={`audio-waveform ${isPlaying ? 'playing' : ''}`}>
        {waveformBars.map((_, index) => (
          <div 
            key={index} 
            className="waveform-bar" 
            style={{ 
              animationDelay: `${(index * 0.15) % 1.2}s`,
              height: isPlaying ? '100%' : '20%' // Reset to flat when paused
            }}
          ></div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="audio-progress-container">
        <span className="time-text current">{formatTime(audioRef.current?.currentTime || 0)}</span>
        <input 
          type="range" 
          className="audio-progress-bar ease-hover-lift"
          min="0" 
          max="100" 
          value={progress || 0} 
          onChange={handleSeek} 
          aria-label="Seek track"
        />
        <span className="time-text duration">{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="audio-controls">
        <button className="control-btn ease-hover-lift" aria-label="Previous track">
          &#9664;&#9664;
        </button>
        <button 
          className={`control-btn play-btn ease-hover-lift ${isPlaying ? 'playing' : ''}`} 
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button className="control-btn ease-hover-lift" aria-label="Next track">
          &#9654;&#9654;
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
