# Pulse Ring Animation

## Description

A pure CSS-only pulse ring animation example. It expands a circular ring smoothly outward while fading out. The animation is completely loopable, infinitely repeating, and uses only GPU-accelerated properties (`transform` and `opacity`) to ensure high performance and prevent layout shifts.

## Files

- demo.html
- style.css

## Features

- CSS only (Zero JavaScript)
- Infinite animation loops
- GPU accelerated (animates only transform and opacity)
- Responsive layout design
- Easy customization via CSS variables

## Folder Structure

```
submissions/examples/pulse-ring-sk/
├── demo.html
├── style.css
└── README.md
```

## How to Run

Simply open `demo.html` directly in any web browser.

## Customization

You can customize the appearance of the pulse ring dynamically using CSS variables:

- `--em-ring-color`: Color of the expanding ring.
- `--em-ring-size`: Maximum scale multiplier of the ring.
- `--em-ring-duration`: Speed of the loop.

## Example HTML

```html
<!-- Position relative wrapper is required around the pulsed element -->
<div class="em-pulse-ring-wrapper">
  <!-- Target element to pulse -->
  <span
    class="em-pulse-ring"
    style="--em-ring-color: #ef4444; --em-ring-size: 2.2;"
  ></span>
</div>
```

## Browser Support

Supports all modern web browsers supporting standard CSS3 Custom Properties and CSS keyframe animations.
