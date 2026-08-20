# Audio Player Widget with Animated Waveform

A production-ready React audio player widget built with React hooks only and EaseMotion utility classes for motion polish. The component is intentionally modular, keyboard accessible, responsive, and copy-paste ready.

## Installation

Copy the component and stylesheet into your React project:

```bash
npm install react react-dom
```

Then import them into your app:

```jsx
import React from 'react';
import AudioPlayerWidget from './AudioPlayerWidget';
import './style.css';
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| audioSrc | string | '' | Audio source URL for the player. |
| title | string | 'Neon Nights' | Track title shown in the widget. |
| artist | string | 'Astra Lane' | Artist name shown in the widget. |
| autoPlay | boolean | false | Starts playback automatically when metadata loads. |
| loop | boolean | false | Loops playback once the track ends. |
| waveformBars | number | 36 | Number of animated waveform bars. |
| className | string | '' | Optional class name for custom styling. |

## Usage

```jsx
import React from 'react';
import AudioPlayerWidget from './AudioPlayerWidget';
import './style.css';

const App = () => (
  <AudioPlayerWidget
    audioSrc="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    title="Ocean Echo"
    artist="Luna Nova"
    autoPlay={false}
    loop={false}
    waveformBars={36}
  />
);

export default App;
```

## Features

- React hooks only: useState, useRef, useEffect
- No external libraries beyond React
- Animated CSS waveform bars that only animate during playback
- Play/pause toggle, seeking, and elapsed/remaining time display
- Graceful loading, paused, ended, and playback-blocked states
- Keyboard accessible controls and responsive layout
