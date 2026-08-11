# React Component: Audio Player Widget with Animated Waveform (#28013)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a sleek, premium audio player widget. It features a spinning vinyl record cover, interactive seek functionality, and a pure CSS pseudo-random animated waveform visualization.

## 📦 What's included?

- `AudioPlayer.jsx`: The React component that manages the native HTML5 `<audio>` element state (play, pause, duration, current time). It also maps out the 24 pseudo-random waveform bars.
- `style.css`: The CSS stylesheet powering the widget layout, the spinning vinyl `@keyframes`, the tactile hover states, and the `animation-delay` staggered bouncing logic of the waveform.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone, including a sample `.mp3` file to test the playback.

## 🛠 Features

- **Pure CSS Waveform**: Real audio waveforms require complex Web Audio API canvas manipulation which is heavy. This widget uses a clever visual trick: 24 CSS bars with randomized heights and randomized `animation-delay` values. When `isPlaying` is true, they infinitely bounce, creating a convincing illusion of audio visualization with zero JS overhead.
- **Spinning Vinyl Cover**: The album artwork is masked into a circle with a hollow center. CSS `animation-play-state: paused / running` is bound to the React playback state, making the record spin only when audio is playing.
- **Interactive Scrubber**: The user can click anywhere on the waveform container. React calculates the relative X position of the click, updates the native audio `currentTime`, and updates the blue CSS progress overlay smoothly.
- **Auto-Formatting**: Built-in time formatting helper converts raw seconds into readable `M:SS` stamps using tabular-numeric fonts to prevent layout jitter.

## 🚀 How to use

1. Copy `AudioPlayer.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component, passing a valid audio source URL.

```jsx
import React from 'react';
import AudioPlayer from './AudioPlayer';
import './style.css'; 

const PodcastPage = () => {
  return (
    <div style={{ padding: '40px' }}>
      <AudioPlayer 
        title="Episode 42: Design Systems"
        artist="UI Engineering Podcast"
        src="https://example.com/audio/episode42.mp3"
        coverArt="/assets/podcast-cover.jpg"
      />
    </div>
  );
};

export default PodcastPage;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements feel physical and responsive to their context.

A static audio player feels dead. By coupling the CSS `animation-play-state` property directly to React's audio lifecycle state, the entire widget comes alive the second audio begins. The vinyl starts spinning (`linear` continuous easing), the waveform starts bouncing (`ease-in-out` alternate easing), and the play button scales down with a tactile `cubic-bezier` pop. It transforms a standard HTML5 audio wrapper into a premium micro-interaction.
