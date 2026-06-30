# ease-typewriter-once

## What does it do?
A typewriter effect that reveals text character by character on hover using CSS `steps()` timing. The text stays fully visible after the animation ends and the cursor fades out.

## Features
- `steps(22, end)` matches the 22 characters of the demo text for per-character reveal
- `animation-fill-mode: forwards` keeps text visible after animation
- Cursor blinks during typing then fades out at the end
- Triggered on hover of the wrapper
- `prefers-reduced-motion` support reveals text instantly

## Usage
```css
.typewriter-text {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
}

.wrapper:hover .typewriter-text {
  animation: typewriterReveal 1.5s steps(22, end) forwards;
}

.wrapper:hover .typewriter-cursor {
  animation: cursorBlinkThenFade 1.5s steps(22, end) forwards;
}

@keyframes typewriterReveal {
  0%   { width: 0; }
  100% { width: 100%; }
}

@keyframes cursorBlinkThenFade {
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  75%  { opacity: 1; }
  90%  { opacity: 0.6; }
  100% { opacity: 0; }
}
```

## Browser Support
- `@keyframes` + `steps()` + `animation-fill-mode` — Chrome 43+, Firefox 16+, Safari 9+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
