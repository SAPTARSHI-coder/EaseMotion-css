import React, { useState } from 'react';
import './VideoPlaylistSidebar.css';

const VideoPlaylistSidebar = ({ playlist = [], onTrackSelect, initialTrackId = null }) => {
  const [activeTrackId, setActiveTrackId] = useState(initialTrackId || playlist[0]?.id || '');

  const handleTrackClick = (track) => {
    setActiveTrackId(track.id);
    if (onTrackSelect) onTrackSelect(track);
  };

  return (
    <aside className="playlist-sidebar">
      <div className="playlist-header">
        <h3 className="playlist-title">Next Up</h3>
        <span className="playlist-count">{playlist.length} Videos</span>
      </div>
      <ul className="playlist-items">
        {playlist.map((track) => {
          const isActive = track.id === activeTrackId;
          return (
            <li
              key={track.id}
              className={`playlist-item ${isActive ? 'active-glow' : ''}`}
              onClick={() => handleTrackClick(track)}
            >
              <div className="thumbnail-container">
                <img src={track.thumbnail || 'https://placeholder.com'} alt={track.title} className="track-thumbnail" />
                <span className="track-duration">{track.duration}</span>
              </div>
              <div className="track-info">
                <h4 className="track-title">{track.title}</h4>
                <p className="track-channel">{track.channel}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default VideoPlaylistSidebar;
