# ease-wave-text

## What does it do?
Each letter in a word wavers up and down in sequence creating a wave effect — pure CSS, no JavaScript.

## Features
- Each `span` gets `translateY` oscillation with increasing `animation-delay`
- Infinite looping wave
- CSS custom properties:
  - `--ease-wave-height` (default: 12px)
  - `--ease-wave-speed` (default: 0.6s)

## Usage
```css
.word span {
  display: inline-block;
  animation: wave 0.6s ease-in-out infinite;
}
.word span:nth-child(2) { animation-delay: 0.08s; }
/* repeat for each letter */

@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
}
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
