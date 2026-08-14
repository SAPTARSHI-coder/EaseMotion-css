import React, { useRef, useEffect } from 'react';

/**
 * Playlist Sidebar Component
 * 
 * @param {Array} tracks - Array of video/track objects { id, title, duration, thumbnail }
 * @param {String} activeTrackId - The ID of the currently playing track
 * @param {Function} onTrackSelect - Callback fired when a track is clicked
 */
const PlaylistSidebar = ({ tracks = [], activeTrackId, onTrackSelect }) => {
  const sidebarRef = useRef(null);

  // Auto-scroll to keep active track in view when it changes programmatically
  useEffect(() => {
    if (!sidebarRef.current || !activeTrackId) return;

    const activeEl = sidebarRef.current.querySelector('.is-active');
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeTrackId]);

  return (
    <div className="ease-playlist-sidebar" ref={sidebarRef}>
      <div className="ease-playlist-header">
        <h3 className="ease-playlist-title">Up Next</h3>
        <span className="ease-playlist-count">{tracks.length} videos</span>
      </div>

      <div className="ease-playlist-tracks">
        {tracks.map((track, index) => {
          const isActive = track.id === activeTrackId;
          
          return (
            <button
              key={track.id}
              className={`ease-playlist-track ${isActive ? 'is-active' : ''}`}
              onClick={() => onTrackSelect && onTrackSelect(track.id)}
              aria-current={isActive ? 'true' : 'false'}
            >
              {/* Play Indicator Overlay (only visible when active) */}
              <div className="ease-playlist-thumbnail-wrapper">
                <img 
                  src={track.thumbnail} 
                  alt="" 
                  className="ease-playlist-thumbnail"
                  loading="lazy"
                />
                
                {/* The glowing play indicator */}
                {isActive && (
                  <div className="ease-playlist-playing-indicator">
                    <span className="ease-bar"></span>
                    <span className="ease-bar"></span>
                    <span className="ease-bar"></span>
                  </div>
                )}
                
                {/* Duration Badge */}
                {!isActive && (
                  <span className="ease-playlist-duration">{track.duration}</span>
                )}
              </div>

              <div className="ease-playlist-meta">
                <h4 className="ease-playlist-track-title">{track.title}</h4>
                <p className="ease-playlist-track-author">{track.author}</p>
              </div>
              
              {/* Background Glow Effect (EaseMotion physics) */}
              {isActive && <div className="ease-playlist-glow-bg"></div>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PlaylistSidebar;
