# Audio Player Widget // EaseMotion

A modular, lightweight audio player component for SaaS dashboards.

## Features
- **Zero Dependencies:** Uses native React hooks and CSS animations.
- **Performant Waveform:** CSS-driven visualization avoids main-thread overhead.
- **Customizable:** Easily styled via CSS variables.

## Usage
```jsx
import AudioPlayer from './AudioPlayer';

const App = () => (
  <AudioPlayer duration="05:20" title="Q3 Performance Review"/>
);