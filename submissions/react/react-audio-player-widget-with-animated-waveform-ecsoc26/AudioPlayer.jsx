import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './AudioPlayer.css';

/**
 * AudioPlayer Component
 * Renders an audio player widget complete with a dynamically animated waveform,
 * click-to-seek, progress timelines, spotlight hover effects, and keyboard navigation.
 *
 * @param {Object} props
 * @param {string} props.title - Track title (e.g. 'Chill Ambient Resonance')
 * @param {string} props.artist - Artist/Author name (e.g. 'EaseMotion Records')
 * @param {string} [props.coverArt] - Optional cover image URL
 * @param {number} [props.duration=180] - Mock duration of track in seconds
 * @param {string} [props.accentColor='#3b82f6'] - Theme color for highlights and progress
 * @param {string} [props.theme='dark'] - UI layout theme: 'dark' | 'light' | 'glass'
 * @param {Function} [props.onPlayPause] - Callback when play state toggles
 * @param {Function} [props.onSeek] - Callback when track seeks to time
 */
export default function AudioPlayer({
  title,
  artist,
  coverArt,
  duration = 180,
  accentColor = '#3b82f6',
  theme = 'dark',
  onPlayPause,
  onSeek
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [hoverProgress, setHoverProgress] = useState(null);
  
  const progressInterval = useRef(null);
  const cardRef = useRef(null);
  const waveformRef = useRef(null);

  // Spotlight mouse gradient coordinate mapping
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  // Mock progress incrementer when playing
  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            clearInterval(progressInterval.current);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (progressInterval.current) clearInterval(progressInterval.current);
    }

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [isPlaying, duration]);

  // Toggle play/pause handler
  const handlePlayToggle = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (onPlayPause) onPlayPause(nextState);
  };

  // Skip/Rewind timeline helper
  const adjustProgress = (amount) => {
    setCurrentTime((prev) => {
      const target = Math.max(0, Math.min(prev + amount, duration));
      if (onSeek) onSeek(target);
      return target;
    });
  };

  // Click on waveform seeks to targeted percentage
  const handleWaveformClick = (e) => {
    if (waveformRef.current) {
      const rect = waveformRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(clickX / rect.width, 1));
      const target = Math.floor(pct * duration);
      setCurrentTime(target);
      if (onSeek) onSeek(target);
    }
  };

  // Tooltip position calculator on waveform hover
  const handleWaveformHover = (e) => {
    if (waveformRef.current) {
      const rect = waveformRef.current.getBoundingClientRect();
      const hoverX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(hoverX / rect.width, 1));
      setHoverProgress(pct * duration);
    }
  };

  const handleWaveformMouseLeave = () => {
    setHoverProgress(null);
  };

  // Keyboard accessibility listeners for seeking & control keys
  const handleKeyDown = (e) => {
    switch (e.key) {
      case ' ':
        e.preventDefault();
        handlePlayToggle();
        break;
      case 'ArrowRight':
        e.preventDefault();
        adjustProgress(5);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        adjustProgress(-5);
        break;
      default:
        break;
    }
  };

  // Formatting helpers: converts seconds to MM:SS
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Waveform Bar Peaks Mock Data (24 values)
  const waveformPeaks = [
    30, 45, 60, 20, 40, 75, 50, 65, 85, 30, 45, 60, 75, 90, 40, 25, 65, 80, 50, 35, 70, 55, 30, 40
  ];

  const getThemeStyles = () => {
    switch (theme) {
      case 'light':
        return {
          bg: '#ffffff',
          border: '1px solid #e2e8f0',
          text: '#0f172a',
          muted: '#64748b',
          cardBg: '#f8fafc',
          cardBorder: '#e2e8f0',
          itemHover: '#f1f5f9',
          spotlightColor: 'rgba(15, 23, 42, 0.02)'
        };
      case 'glass':
        return {
          bg: 'rgba(15, 23, 42, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          text: '#f8fafc',
          muted: '#94a3b8',
          cardBg: 'rgba(255, 255, 255, 0.02)',
          cardBorder: 'rgba(255, 255, 255, 0.04)',
          itemHover: 'rgba(255, 255, 255, 0.05)',
          backdropBlur: '12px',
          spotlightColor: 'rgba(255, 255, 255, 0.025)'
        };
      case 'dark':
      default:
        return {
          bg: '#090d16',
          border: '1px solid #1e293b',
          text: '#f8fafc',
          muted: '#6b7280',
          cardBg: '#111827',
          cardBorder: '#1f2937',
          itemHover: '#1f2937',
          spotlightColor: 'rgba(255, 255, 255, 0.015)'
        };
    }
  };

  const styleTheme = getThemeStyles();
  const currentPct = (currentTime / duration) * 100;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="audio-player-card"
      style={{
        width: '380px',
        backgroundColor: styleTheme.bg,
        border: styleTheme.border,
        borderRadius: '20px',
        padding: '1.75rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        outline: 'none',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        backgroundImage: `radial-gradient(circle 100px at var(--mouse-x, 0) var(--mouse-y, 0), ${styleTheme.spotlightColor}, transparent)`,
        backdropFilter: styleTheme.backdropBlur ? `blur(${styleTheme.backdropBlur})` : 'none'
      }}
    >
      {/* Top Header metadata bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 2 }}>
        {/* Cover art image container */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#1e293b',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
            flexShrink: 0
          }}
        >
          {coverArt ? (
            <img src={coverArt} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: accentColor,
                fontSize: '1.5rem'
              }}
            >
              🎵
            </div>
          )}
        </div>

        {/* Track Label text info */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1, textAlign: 'left' }}>
          <h3
            style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              color: styleTheme.text,
              margin: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              letterSpacing: '-0.01em'
            }}
          >
            {title}
          </h3>
          <p style={{ fontSize: '0.8rem', color: styleTheme.muted, margin: '0.15rem 0 0 0', fontWeight: 600 }}>
            {artist}
          </p>
        </div>
      </div>

      {/* Interactive Sound Waveform element */}
      <div style={{ position: 'relative', width: '100%', zIndex: 2 }}>
        <div
          ref={waveformRef}
          onClick={handleWaveformClick}
          onMouseMove={handleWaveformHover}
          onMouseLeave={handleWaveformMouseLeave}
          style={{
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3px',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          {waveformPeaks.map((peak, index) => {
            const barPct = (index / waveformPeaks.length) * 100;
            const isPlayed = barPct <= currentPct;
            
            return (
              <span
                key={index}
                className={`wave-bar ${isPlaying ? 'wave-playing' : ''}`}
                style={{
                  height: `${peak}%`,
                  width: '100%',
                  backgroundColor: isPlayed ? accentColor : 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '3px',
                  transition: 'background-color 0.2s ease, height 0.3s ease',
                  transformOrigin: 'center',
                  animationDelay: `${index * 0.05}s`
                }}
              />
            );
          })}
        </div>

        {/* Hover seek target tooltip */}
        {hoverProgress !== null && (
          <div
            style={{
              position: 'absolute',
              bottom: '100%',
              left: `${(hoverProgress / duration) * 100}%`,
              transform: 'translateX(-50%) translateY(-6px)',
              backgroundColor: '#000',
              color: '#fff',
              fontSize: '0.68rem',
              fontWeight: 700,
              padding: '0.2rem 0.4rem',
              borderRadius: '4px',
              pointerEvents: 'none',
              fontFamily: '"Fira Code", monospace',
              boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
              zIndex: 3
            }}
          >
            {formatTime(hoverProgress)}
          </div>
        )}
      </div>

      {/* Controls & Timeline Row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', zIndex: 2 }}>
        {/* Timeline numeric values */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: styleTheme.muted, fontFamily: '"Fira Code", monospace' }}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Dynamic seek progress timeline bar */}
        <div
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '9px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div
            style={{
              width: `${currentPct}%`,
              height: '100%',
              backgroundColor: accentColor,
              boxShadow: `0 0 10px ${accentColor}`,
              transition: 'width 0.1s linear'
            }}
          />
        </div>

        {/* Buttons Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
          {/* Rewind Button */}
          <button
            onClick={() => adjustProgress(-10)}
            className="player-control-btn"
            title="Rewind 10s"
            style={{
              border: 'none',
              background: 'transparent',
              fontSize: '1.25rem',
              color: styleTheme.muted,
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
          >
            ⏮
          </button>

          {/* Central Play/Pause Bubble */}
          <button
            onClick={handlePlayToggle}
            className="player-play-btn"
            title={isPlaying ? 'Pause' : 'Play'}
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: accentColor,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              fontSize: '1.5rem',
              boxShadow: `0 0 15px ${accentColor}40`,
              transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>

          {/* Skip Forward Button */}
          <button
            onClick={() => adjustProgress(10)}
            className="player-control-btn"
            title="Skip 10s"
            style={{
              border: 'none',
              background: 'transparent',
              fontSize: '1.25rem',
              color: styleTheme.muted,
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
          >
            ⏭
          </button>
        </div>
      </div>
    </div>
  );
}

// React PropTypes validation schema keys definitions
AudioPlayer.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  coverArt: PropTypes.string,
  duration: PropTypes.number,
  accentColor: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light', 'glass']),
  onPlayPause: PropTypes.func,
  onSeek: PropTypes.func
};
