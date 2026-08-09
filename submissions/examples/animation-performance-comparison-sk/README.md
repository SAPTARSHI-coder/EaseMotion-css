# CSS Animation Performance Comparison

## 1. What does this do?
This is a live educational dashboard that visually demonstrates and compares the rendering engine performance profiles of animations built using GPU-accelerated transforms (`transform: translateX()`), CPU-bound absolute offsets (`left`), and box model dimensions (`margin-left`).

## 2. How is it used?
The user copies the markup tracks and performance styles to build custom high-performance animations, targeting compositor-only layers.

```html
<!-- High performance composite-only structure -->
<div class="track">
  <div class="ball-wrapper anim-transform">
    <div class="ball"></div>
  </div>
</div>
```

```css
/* Corresponding keyframe animation */
@keyframes slide-transform {
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
}
```

## 3. Why is it useful?
It fits EaseMotion CSS's core philosophy of creating lightweight, high-performance, and buttery-smooth user interfaces. It educates developers on how avoiding properties that trigger Reflow (Layout) or Repaint (Paint) leads to optimal framerates (60+ FPS) and minimal main thread overhead.

---

## Overview
This visual laboratory compares how different CSS properties behave inside the browser layout lifecycle. It animates three separate glowing indicators simultaneously. Next to each track, an interactive pipeline indicator displays which phases of the browser layout loop (Layout -> Paint -> Composite) are triggered. 

It also includes interactive play/pause controls and speed variables to let users inspect frame changes under slow-motion states.

## Features
- **Parallel Animation Tracks**: See the visual difference between the three approaches running side-by-side.
- **Rendering Pipeline Indicators**: Displays real-time states mapping each property's effect on browser painting workflows.
- **Pure CSS Interactivity**: Toggle playback states (Play/Pause) and durations (0.5s, 2s, 4s) using pure CSS variables and sibling selector overrides.
- **Responsive Matrix Table**: A comprehensive breakdown table outlining trigger stages, primary threads (GPU vs CPU), and performance ratings.
- **Clean Design**: Designed with glassmorphic cards, radial background highlights, high-contrast typography, and focus ring accessibility.

## Folder Structure
```text
submissions/examples/animation-performance-comparison-sk/
├── demo.html     # Semantic HTML layout and rendering pipeline indicators
├── style.css     # Dark mode, glassmorphic layout, and animation keyframes
└── README.md     # Guidelines, feature lists, and customization references
```

## Customization
Adjust colors and properties inside [style.css](style.css):

### Update Performance Scale Accents
```css
:root {
  --color-excellent: #10b981;    /* Change compositor green */
  --color-moderate: #f59e0b;     /* Change repaint yellow */
  --color-poor: #ef4444;         /* Change reflow red */
}
```

### Add Custom Speed Radios
Extend the checkbox controls and add corresponding selectors in CSS:
```css
#speed-custom:checked ~ .app-wrapper {
  --anim-duration: 5.0s;
}
```

## Browser Compatibility
- **Google Chrome**: 50+ (Full Support)
- **Mozilla Firefox**: 49+ (Full Support)
- **Safari**: 10+ (Full Support)
- **Microsoft Edge**: 79+ (Full Support)
