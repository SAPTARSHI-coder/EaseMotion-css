# React Audio Player Widget with Animated Waveform

## Description
A beautifully designed, self-contained React Audio Player widget featuring a dynamic CSS-driven animated waveform. Built seamlessly around the native HTML5 `<audio>` API, this component leverages **EaseMotion CSS** utility classes to handle hover states (`ease-hover-lift`) and entrance animations (`ease-fade-in`). The pulsating waveform is purely CSS-driven and mathematically staggered via React rendering to avoid heavy WebGL or canvas dependencies, keeping the DOM extremely light.

## Installation
This widget requires no external libraries outside of React and a native browser environment.
1. Copy the `AudioPlayer.jsx` and `style.css` files into your React project.
2. Ensure you have the global `easemotion.css` framework imported at the root of your application.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `audioSrc` | `String` | `undefined` | **Required**. The URL/path to the audio file (e.g., .mp3, .wav). |
| `title` | `String` | `"Unknown Track"` | The name of the track displayed in the widget. |
| `artist` | `String` | `"Unknown Artist"` | The name of the artist/creator. |
| `coverArt` | `String` | `""` | Optional URL/path to an image thumbnail. If omitted, a sleek CSS gradient placeholder is shown. |
| `autoPlay` | `Boolean`| `false` | If `true`, the widget attempts to play the audio on mount (subject to browser auto-play policies). |

## Usage Example

```jsx
import React from 'react';
import AudioPlayer from './AudioPlayer';

const App = () => {
  return (
    <div style={{ padding: '3rem', backgroundColor: '#f1f5f9', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Now Playing</h2>
      
      <AudioPlayer 
        audioSrc="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        title="Ambient Journey"
        artist="EaseMotion Soundscapes"
        coverArt="https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=300&q=80"
      />
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **Zero External UI Dependencies**: The range slider (progress bar) and waveform are completely custom-styled HTML inputs and `div`s, avoiding hefty component libraries.
- **`ease-hover-lift` Integration**: Applied to all tactile controls (play button, track skips, progress slider thumb) to provide a satisfying, magnetic lift effect on hover and press.
- **Dynamic CSS Waveform**: The component renders 12 bars that hook into a CSS `@keyframes` pulse animation. The `animation-delay` is dynamically calculated in React using `(index * 0.15) % 1.2` to generate a natural, pseudo-random wave propagation effect that instantly flattens out when the track is paused.
