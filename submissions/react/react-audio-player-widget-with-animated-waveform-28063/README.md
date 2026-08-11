# React Component: Audio Player Widget with Animated Waveform (#28063)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a compact audio player widget featuring a spinning vinyl record animation and an organic, dancing waveform progress bar.

## 📦 What's included?

- `AudioPlayer.jsx`: The React component that manages play state, simulates audio progress, and generates randomized height bars for the waveform visualization.
- `style.css`: The CSS stylesheet powering the continuous vinyl spin rotation and the `easeWaveformDance` keyframe animations that bring the UI to life when playing.
- `demo.html`: A self-contained browser demo running the React component to showcase the play/pause interactions and progress simulation.

## 🛠 Features

- **Vinyl Spin Animation**: The album art is cropped into a circle with an inner white "hole". When playing, a continuous CSS `@keyframes` rotation simulates a vinyl record player. When paused, the rotation halts instantly.
- **Organic Dancing Waveform**: Instead of a flat progress bar, the widget generates 40 individual `<div>` bars with randomized heights. When playing, each bar scales up and down independently using randomized `animationDelay` offsets, creating an organic "equalizer" or "voice note" visual effect.
- **Dynamic Color Fill**: As the simulated audio progresses, the waveform bars turn blue sequentially, replacing a standard range slider with a highly visual representation of time elapsed.
- **Tactile Play Button**: The play button features hover lifts (`transform: scale(1.1)`) and active press states, providing satisfying physical feedback.

## 🚀 How to use

1. Copy `AudioPlayer.jsx` into your React project.
2. Copy `style.css` and import it.
3. Replace the `progress` interval simulation with actual HTML5 `<audio>` or Web Audio API `timeupdate` listeners in a production environment.

```jsx
import React from 'react';
import AudioPlayer from './AudioPlayer';
import './style.css'; 

const Dashboard = () => {
  return (
    <AudioPlayer 
      title="Lofi Study Beats" 
      artist="EaseMotion Records" 
      coverUrl="https://example.com/album-art.jpg" 
      duration={180} // Duration in seconds
    />
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

Standard HTML audio players are rigid and sterile. They don't reflect the dynamic nature of music or sound. By rendering a continuous, randomized CSS keyframe animation on the waveform bars only when `isPlaying` is true, we create a UI that feels "alive" and reactive. The spinning vinyl cover reinforces this metaphor, transforming a digital widget into a nostalgic, physical-feeling object.
