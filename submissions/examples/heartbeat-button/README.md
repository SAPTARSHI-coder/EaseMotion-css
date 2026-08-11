# Heartbeat Button

## What does it do?
A call-to-action button that pulses like a beating heart using CSS scaling.

## Features
- Two-beat pulse pattern (lub-dub rhythm)
- Continuous looping animation
- Pure CSS, no JavaScript

## Usage
```css
.btn {
  animation: heartbeat 1.2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%   { scale: 1; }
  14%  { scale: 1.15; }
  28%  { scale: 1; }
  42%  { scale: 1.08; }
  70%  { scale: 1; }
  100% { scale: 1; }
}
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
