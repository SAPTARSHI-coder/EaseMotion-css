import React, { useState, useEffect, useRef } from 'react';

/**
 * Animated Waveform Bar
 * A pure CSS pseudo-random equalizer bar.
 */
const WaveBar = ({ isPlaying, height, delay }) => {
  return (
    <div 
      className={`ease-wave-bar ${isPlaying ? 'is-playing' : ''}`}
      style={{ 
        height: `${height}px`,
        animationDelay: `${delay}s` 
      }}
    />
  );
};

/**
 * Audio Player Widget Component
 * 
 * @param {String} src - URL of the audio file
 * @param {String} title - Track title
 * @param {String} artist - Track artist
 * @param {String} coverArt - URL of the cover art image
 */
const AudioPlayer = ({ src, title, artist, coverArt }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  
  // Generate 24 static bars for the waveform visualization
  // In a real app analyzing actual audio, this would use Web Audio API,
  // but this is a pure CSS visual mockup as requested.
  const waveBars = useRef(
    Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      // Random height between 8px and 32px
      height: Math.floor(Math.random() * (32 - 8 + 1)) + 8,
      // Random delay to stagger animations
      delay: Math.random() * 1.5
    }))
  ).current;

  // Setup Audio API event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleEnd = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnd);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnd);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    
    // Calculate new time based on click position
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width);
    
    audio.currentTime = newProgress * duration;
    setProgress(newProgress * 100);
  };

  // Format time (e.g. 125s -> "2:05")
  const formatTime = (timeInSeconds) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const currentTime = audioRef.current ? audioRef.current.currentTime : 0;

  return (
    <div className={`ease-audio-player ${isPlaying ? 'is-playing' : ''}`}>
      {/* Hidden native audio element */}
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Cover Art with spinning vinyl effect */}
      <div className="ease-audio-cover-wrapper">
        <img src={coverArt} alt="Cover Art" className="ease-audio-cover" />
        <div className="ease-audio-vinyl-hole"></div>
      </div>

      <div className="ease-audio-body">
        {/* Header: Title and Artist */}
        <div className="ease-audio-header">
          <div className="ease-audio-meta">
            <h3 className="ease-audio-title">{title}</h3>
            <p className="ease-audio-artist">{artist}</p>
          </div>
          
          <button 
            className="ease-audio-play-btn" 
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                <rect x="14" y="4" width="4" height="16" rx="1"></rect>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* CSS Animated Waveform */}
        <div className="ease-audio-waveform-container" onClick={handleSeek} aria-label="Seek track">
          {/* Progress fill overlay */}
          <div 
            className="ease-audio-waveform-progress"
            style={{ width: `${progress}%` }}
          ></div>
          
          <div className="ease-audio-waveform">
            {waveBars.map(bar => (
              <WaveBar 
                key={bar.id} 
                height={bar.height} 
                delay={bar.delay} 
                isPlaying={isPlaying} 
              />
            ))}
          </div>
        </div>

        {/* Timestamps */}
        <div className="ease-audio-time">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
