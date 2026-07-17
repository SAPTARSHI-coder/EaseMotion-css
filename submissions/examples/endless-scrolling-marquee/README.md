# Endless Scrolling Marquee

## What does it do?
A seamlessly looping horizontal text or logo marquee that doesn't stutter when resetting — pure CSS, no JavaScript.

## Features
- Infinite seamless loop using duplicated content + `translateX(-50%)`
- No JS — pure CSS keyframe animation
- Customizable speed via `animation-duration`

## Usage
```html
<div class="marquee">
  <div class="marquee-track">
    <span class="marquee-content">Your text here ✦</span>
    <span class="marquee-content">Your text here ✦</span>
  </div>
</div>
```

```css
.marquee {
  overflow: hidden;
}
.marquee-track {
  display: flex;
  width: fit-content;
  animation: marquee 10s linear infinite;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
