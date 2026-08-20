# CSS Countdown Burst

A CSS-only countdown animation that cycles through 3, 2, and 1 before
revealing a launch state with a burst effect.

## Features

- Pure HTML and CSS
- Animated 3-2-1 countdown
- Launch burst effect
- Radial countdown interface
- Glowing visual effects
- Responsive layout
- Reduced-motion support
- Forced-colors support
- No JavaScript required

## Files

- `demo.html` — Interactive countdown demonstration
- `style.css` — Component styling and animations
- `README.md` — Documentation

## Usage

The countdown can be placed inside any container:

```html
<div class="countdown" aria-label="Three second countdown">
  <div class="countdown-number number-three" aria-hidden="true">
    <span>3</span>
  </div>

  <div class="countdown-number number-two" aria-hidden="true">
    <span>2</span>
  </div>

  <div class="countdown-number number-one" aria-hidden="true">
    <span>1</span>
  </div>

  <div class="launch" aria-label="Launch">
    <span class="burst burst-one"></span>
    <strong>GO!</strong>
  </div>
</div>