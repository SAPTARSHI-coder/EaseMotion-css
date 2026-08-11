# React Component: Video Playlist Sidebar with Active Track Glow (#28014)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a premium, dark-themed video playlist sidebar. It features a physics-based active track background glow, animated equalizer bars on the playing thumbnail, and auto-scrolling functionality.

## 📦 What's included?

- `PlaylistSidebar.jsx`: The React component that iterates over track data, renders the layout, manages `scrollIntoView` for the active track, and conditionally renders the playing indicator overlay.
- `style.css`: The CSS stylesheet powering the dark theme, the `cubic-bezier` spring entrance for the active track glow, thumbnail hover scales, and the staggered `@keyframes` equalizer bounce animation.
- `demo.html`: A self-contained browser demo rendering the sidebar alongside a mock video player to demonstrate layout integration (uses Babel standalone).

## 🛠 Features

- **EaseMotion Active Glow**: When a track becomes active, instead of instantly swapping a background color, an absolute positioned `<div className="ease-playlist-glow-bg">` renders behind the track. It uses a `cubic-bezier(0.34, 1.56, 0.64, 1)` spring animation to pop into existence, creating a highly tactile visual cue.
- **Animated Equalizer Overlay**: The active track thumbnail automatically receives a semi-transparent black overlay containing three glowing blue equalizer bars. These bars use staggered `animation-delay` and infinite `@keyframes` bouncing to simulate audio playback.
- **Auto-Scrolling**: The React component utilizes `useEffect` and `scrollIntoView()` to ensure that if the active track changes programmatically (e.g., video finishes and auto-advances), the sidebar will automatically scroll to keep the newly active track visible.
- **Smooth Hover Physics**: Non-active tracks slightly translate horizontally (`translateX(4px)`) on hover, inviting clicks without disrupting the layout.

## 🚀 How to use

1. Copy `PlaylistSidebar.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component, passing your array of video data.

```jsx
import React, { useState } from 'react';
import PlaylistSidebar from './PlaylistSidebar';
import './style.css'; 

const VideoPage = () => {
  const tracks = [
    { 
      id: 'v1', 
      title: 'Building a React Component', 
      author: 'UI Dev', 
      duration: '12:45', 
      thumbnail: 'thumb1.jpg' 
    },
    { 
      id: 'v2', 
      title: 'Advanced CSS Spring Physics', 
      author: 'EaseMotion', 
      duration: '08:22', 
      thumbnail: 'thumb2.jpg' 
    }
  ];

  const [activeId, setActiveId] = useState(tracks[0].id);

  return (
    <div style={{ display: 'flex', height: '600px' }}>
      {/* Your main video player goes here */}
      <div className="player" style={{ flex: 1 }}>...</div>
      
      {/* The Sidebar Component */}
      <PlaylistSidebar 
        tracks={tracks}
        activeTrackId={activeId}
        onTrackSelect={(id) => setActiveId(id)}
      />
    </div>
  );
};

export default VideoPage;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** believes micro-interactions define the perceived quality of software.

In standard video platforms, active states in playlists are often static (just a gray background). By combining React's conditional rendering with EaseMotion's CSS physics, we've elevated this pattern. The glowing background physically springs out from behind the text, and the equalizer bars provide continuous ambient motion. These small, performant CSS animations make the sidebar feel alive and highly polished.
