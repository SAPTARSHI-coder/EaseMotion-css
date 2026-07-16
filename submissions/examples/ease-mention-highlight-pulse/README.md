# ease-mention-highlight-pulse

## What does it do?
When a user is @mentioned, their username briefly pulses with a highlight color using pure CSS keyframe animation — no JavaScript required.

## Features
- `background-color` pulse animation, 2–3 cycles then settles
- Draws attention without being permanently distracting
- Common chat/social UI pattern

## Usage
```css
.mention {
  animation: mention-pulse 2s ease 1;
}

@keyframes mention-pulse {
  0%   { background-color: transparent; }
  15%  { background-color: rgba(167, 139, 250, 0.25); }
  30%  { background-color: rgba(167, 139, 250, 0.1); }
  50%  { background-color: rgba(167, 139, 250, 0.2); }
  70%  { background-color: rgba(167, 139, 250, 0.05); }
  100% { background-color: transparent; }
}
```

## Browser Support
- `@keyframes` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
