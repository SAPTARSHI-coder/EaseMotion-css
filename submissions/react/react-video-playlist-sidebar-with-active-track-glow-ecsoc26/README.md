# React Component: Video Playlist Sidebar with Active Track Glow (ECSoC26 Edition)

I am fixing this issue under ECSoC26.

1. **What does this do?**  
   It renders a modular, copy-paste ready React component for a **Video Playlist Sidebar with Active Track Glow** containing audio visualizer animations, progress bars completion indicator, channel details metadata, and active track outlines neon pulse transitions.

2. **How is it used?**  
   Import [VideoPlaylistSidebar.jsx](./VideoPlaylistSidebar.jsx) into your React application and pass an actions list array containing videos data. Binds selections trigger to update the active item.
   
3. **Why is it useful?**  
   It delivers zero-dependency keyboard accessible video navigation lists, audio equalizer animations, and custom mouse spotlight gradient coordinates variables.

---

## 📦 Installation

Copy [VideoPlaylistSidebar.jsx](./VideoPlaylistSidebar.jsx) and [VideoPlaylistSidebar.css](./VideoPlaylistSidebar.css) into your component directory. Import the component inside your React entry point:

```javascript
import VideoPlaylistSidebar from './VideoPlaylistSidebar';
```

---

## 🚀 Usage Example

```jsx
import React, { useState } from 'react';
import VideoPlaylistSidebar from './VideoPlaylistSidebar';

export default function App() {
  const [activeId, setActiveId] = useState(1);

  const lectures = [
    {
      id: 1,
      title: '01 / Welcome and Introduction to CSS Layouts',
      duration: 340,
      channel: 'CSS Core Studio',
      progress: 100,
      thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200'
    },
    {
      id: 2,
      title: '02 / Mastering CSS Grid Auto Height Transitions',
      duration: 520,
      channel: 'CSS Core Studio',
      progress: 45,
      thumbnail: 'https://images.unsplash.com/photo-1541462608141-27b297b15575?w=200'
    },
    {
      id: 3,
      title: '03 / Advanced Easing Transitions Keyframes',
      duration: 410,
      channel: 'CSS Core Studio',
      progress: 0,
      thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=200'
    }
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#020617' }}>
      <main style={{ flex: 1, padding: '2rem', color: '#fff' }}>
        <h1>Video Lecture Player</h1>
        <p>Active ID playing: {activeId}</p>
      </main>

      <VideoPlaylistSidebar
        videos={lectures}
        activeVideoId={activeId}
        onVideoSelect={(v) => setActiveId(v.id)}
        accentColor="#10b981"
        theme="dark"
      />
    </div>
  );
}
```

---

## ⚙ Props Specifications

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `videos` | `array` | `[]` | Array of video track objects (id, title, duration, channel, views, thumbnail, progress). |
| `activeVideoId` | `string \| number` | *Required* | ID of the currently playing/active lecture track. |
| `onVideoSelect` | `function` | *Required* | Callback function triggered when selection updates. |
| `accentColor` | `string` | `'#10b981'` | Highlight neon color theme. |
| `theme` | `string` | `'dark'` | Visual layout style options: `'dark' \| 'light' \| 'glass'`. |
