# Infinite Marquee / Ticker

## What does it do?
A seamlessly looping horizontal scrolling marquee with pause-on-hover support — pure CSS, no JavaScript.

## Features
- Infinite seamless loop via duplicated content + `translateX(-50%)`
- Pause-on-hover via `animation-play-state: paused`
- Perfect for ticker text, badges, or logo carousels
- Pure CSS, no JavaScript

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
.marquee-track {
  animation: marquee 10s linear infinite;
}
.marquee:hover .marquee-track {
  animation-play-state: paused;
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
