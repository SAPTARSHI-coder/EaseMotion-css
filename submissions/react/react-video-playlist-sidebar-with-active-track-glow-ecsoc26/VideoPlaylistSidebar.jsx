import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './VideoPlaylistSidebar.css';

/**
 * VideoPlaylistSidebar Component
 * Displays a playlist sidebar with active track glowing indicators, dynamic progress bars,
 * audio equalizer simulations, and hover spotlights.
 *
 * @param {Object} props
 * @param {Array} props.videos - Array of video objects: { id, title, duration, channel, views, thumbnail, progress }
 * @param {string|number} props.activeVideoId - ID of currently active/playing video
 * @param {Function} props.onVideoSelect - Callback when a video item is selected
 * @param {string} [props.accentColor='#10b981'] - Highlighting neon color (e.g. '#10b981' for green, '#f43f5e' for rose)
 * @param {string} [props.theme='dark'] - Theme style options: 'dark' | 'light' | 'glass'
 */
export default function VideoPlaylistSidebar({
  videos = [],
  activeVideoId,
  onVideoSelect,
  accentColor = '#10b981',
  theme = 'dark'
}) {
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);

  // Helper: Format duration from seconds (e.g., 320 -> "5:20")
  const formatDuration = (secs) => {
    if (typeof secs !== 'number' || isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Keyboard navigation within the playlist list item elements
  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onVideoSelect && videos[index]) {
        onVideoSelect(videos[index]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextSibling = e.currentTarget.nextElementSibling;
      if (nextSibling) nextSibling.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevSibling = e.currentTarget.previousElementSibling;
      if (prevSibling) prevSibling.focus();
    }
  };

  // Spotlight mouse effect coordinate tracker values update
  const handleMouseMove = (e, videoId) => {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    item.style.setProperty('--spotlight-x', `${x}px`);
    item.style.setProperty('--spotlight-y', `${y}px`);
  };

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

  return (
    <aside
      className="video-playlist-sidebar"
      ref={containerRef}
      style={{
        width: '360px',
        height: '100%',
        backgroundColor: styleTheme.bg,
        borderLeft: styleTheme.border,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.25)',
        boxSizing: 'border-box',
        overflow: 'hidden',
        backdropFilter: styleTheme.backdropBlur ? `blur(${styleTheme.backdropBlur})` : 'none'
      }}
    >
      {/* Sidebar Header Title metadata info */}
      <div
        style={{
          padding: '1.5rem',
          borderBottom: styleTheme.border,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textAlign: 'left' }}>
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: styleTheme.text,
              margin: 0,
              letterSpacing: '-0.02em'
            }}
          >
            Course Playlist
          </h2>
          <span style={{ fontSize: '0.78rem', color: styleTheme.muted, fontWeight: 600 }}>
            {videos.length} Lectures • {formatDuration(videos.reduce((acc, v) => acc + (v.duration || 0), 0))} total duration
          </span>
        </div>
        <div
          style={{
            padding: '0.35rem 0.6rem',
            borderRadius: '6px',
            backgroundColor: `${accentColor}12`,
            border: `1px solid ${accentColor}30`,
            color: accentColor,
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          Active Glow
        </div>
      </div>

      {/* Videos List Scroll Track items container */}
      <div
        className="playlist-tracks-scroll"
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem 0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}
      >
        {videos.map((video, index) => {
          const isActive = video.id === activeVideoId;
          const isHovered = video.id === hoveredId;

          return (
            <div
              key={video.id}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
              onMouseMove={(e) => handleMouseMove(e, video.id)}
              onClick={() => onVideoSelect && onVideoSelect(video)}
              className={`playlist-track-item ${isActive ? 'active-track-glow' : ''}`}
              style={{
                display: 'flex',
                gap: '0.85rem',
                padding: '0.85rem',
                borderRadius: '12px',
                backgroundColor: isActive ? `${accentColor}06` : 'transparent',
                border: isActive
                  ? `1px solid ${accentColor}`
                  : `1px solid ${styleTheme.cardBorder}`,
                boxShadow: isActive
                  ? `0 0 15px ${accentColor}18`
                  : 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                position: 'relative',
                overflow: 'hidden',
                outline: 'none',
                backgroundImage: `radial-gradient(circle 90px at var(--spotlight-x, 0) var(--spotlight-y, 0), ${styleTheme.spotlightColor}, transparent)`
              }}
            >
              {/* Left Side: Thumbnail with indicator visual overlays */}
              <div
                style={{
                  width: '96px',
                  height: '54px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#000',
                  flexShrink: 0
                }}
              >
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: isActive ? 0.8 : 1,
                      transition: 'opacity 0.2s ease'
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: styleTheme.muted,
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}
                  >
                    Lecture {index + 1}
                  </div>
                )}

                {/* Duration Badge */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    right: '4px',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: '#fff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '0.1rem 0.3rem',
                    borderRadius: '4px',
                    fontFamily: '"Fira Code", monospace'
                  }}
                >
                  {formatDuration(video.duration)}
                </span>

                {/* Equalizer Visualizer Overlay when active playing track */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '3px'
                    }}
                  >
                    <span className="eq-bar bar1" style={{ width: '3px', height: '14px', backgroundColor: accentColor, borderRadius: '2px' }} />
                    <span className="eq-bar bar2" style={{ width: '3px', height: '8px', backgroundColor: accentColor, borderRadius: '2px' }} />
                    <span className="eq-bar bar3" style={{ width: '3px', height: '18px', backgroundColor: accentColor, borderRadius: '2px' }} />
                    <span className="eq-bar bar4" style={{ width: '3px', height: '11px', backgroundColor: accentColor, borderRadius: '2px' }} />
                  </div>
                )}
              </div>

              {/* Right Side: Track Details title metadata */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1,
                  minWidth: 0,
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <span
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: isActive ? '#fff' : styleTheme.text,
                      lineHeight: '1.2',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {video.title}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: styleTheme.muted, fontWeight: 500 }}>
                    {video.channel || 'EaseMotion Studio'}
                  </span>
                </div>

                {/* Progress bar inside card if video has progress tracked */}
                {video.progress !== undefined && video.progress > 0 && (
                  <div
                    style={{
                      width: '100%',
                      height: '3px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '9px',
                      overflow: 'hidden',
                      marginTop: '0.35rem'
                    }}
                  >
                    <div
                      style={{
                        width: `${video.progress}%`,
                        height: '100%',
                        backgroundColor: accentColor,
                        boxShadow: `0 0 8px ${accentColor}`,
                        transition: 'width 0.4s ease'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Styles Injected Locally in component shadow */}
      <style>{`
        .playlist-track-item:focus-visible {
          border-color: ${accentColor} !important;
          box-shadow: 0 0 0 3px ${accentColor}30 !important;
        }
        
        .active-track-glow {
          animation: pulseGlow border-pulse 2s infinite alternate;
        }

        .eq-bar {
          transform-origin: bottom;
          animation: bounceEQ 1s infinite alternate ease-in-out;
        }

        .bar1 { animation-delay: 0.1s; }
        .bar2 { animation-delay: 0.3s; }
        .bar3 { animation-delay: 0s; }
        .bar4 { animation-delay: 0.5s; }

        @keyframes bounceEQ {
          from { transform: scaleY(0.3); }
          to { transform: scaleY(1); }
        }

        @keyframes pulseGlow {
          from {
            box-shadow: 0 0 10px ${accentColor}12;
            border-color: ${accentColor}80;
          }
          to {
            box-shadow: 0 0 20px ${accentColor}25;
            border-color: ${accentColor};
          }
        }
      `}</style>
    </aside>
  );
}

// React PropTypes validation schema keys definitions
VideoPlaylistSidebar.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      channel: PropTypes.string,
      views: PropTypes.number,
      thumbnail: PropTypes.string,
      progress: PropTypes.number
    })
  ).isRequired,
  activeVideoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onVideoSelect: PropTypes.func.isRequired,
  accentColor: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light', 'glass'])
};
