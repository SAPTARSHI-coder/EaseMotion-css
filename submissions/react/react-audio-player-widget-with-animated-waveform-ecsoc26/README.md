# React Component: Audio Player Widget with Animated Waveform (ECSoC26 Edition)

I am fixing this issue under ECSoC26.

1. **What does this do?**  
   It renders a modular, copy-paste ready React component for a **Audio Player Widget with Animated Waveform** containing dynamic progress tracking, play/pause and seeking controls, and interactive bouncing equalizer waveforms.

2. **How is it used?**  
   Import [AudioPlayer.jsx](./AudioPlayer.jsx) into your React application and pass props specifying track details. Seek to target timeline positions by clicking on waveform peaks or using the left/right arrow keys.
   
3. **Why is it useful?**  
   It delivers zero-dependency keyboard accessible media players, interactive seek-to-click waveforms, and custom mouse spotlight gradients.

---

## 📦 Installation

Copy [AudioPlayer.jsx](./AudioPlayer.jsx) and [AudioPlayer.css](./AudioPlayer.css) into your component directory. Import the component inside your React entry point:

```javascript
import AudioPlayer from './AudioPlayer';
```

---

## 🚀 Usage Example

```jsx
import React from 'react';
import AudioPlayer from './AudioPlayer';

export default function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#020617' }}>
      <AudioPlayer
        title="Chill Ambient Resonance"
        artist="EaseMotion Records"
        coverArt="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200"
        duration={240}
        accentColor="#3b82f6"
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
| `title` | `string` | *Required* | Title of the audio track. |
| `artist` | `string` | *Required* | Name of the artist/channel. |
| `coverArt` | `string` | `undefined` | Cover image layout URL. |
| `duration` | `number` | `180` | Length of track in seconds. |
| `accentColor` | `string` | `'#3b82f6'` | Highlight theme color. |
| `theme` | `string` | `'dark'` | Visual styling theme options: `'dark' \| 'light' \| 'glass'`. |
| `onPlayPause` | `function` | `undefined` | Callback triggered when state toggles between play/pause. |
| `onSeek` | `function` | `undefined` | Callback triggered when seeking timeline position. |
