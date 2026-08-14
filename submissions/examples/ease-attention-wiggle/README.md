# ease-attention-wiggle

## What does it do?
Playful horizontal wiggle to grab the user's attention — friendlier and slower than a shake.

## Features
- `translateX` oscillation for a side-to-side wiggle
- 2–3 cycles (configurable via `animation-iteration-count`)
- CSS custom properties:
  - `--ease-wiggle-amount` (default: 8px)
  - `--ease-wiggle-speed` (default: 0.5s)
- Pure CSS, no JavaScript

## Usage
```css
.element {
  animation: wiggle 0.5s ease-in-out 2;
}

@keyframes wiggle {
  0%, 100% { transform: translateX(0); }
  25%      { transform: translateX(-8px); }
  50%      { transform: translateX(8px); }
  75%      { transform: translateX(-4px); }
}
```

## Browser Support
- Chrome 104+, Firefox 108+, Safari 14.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
