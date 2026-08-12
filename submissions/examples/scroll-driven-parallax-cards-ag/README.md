# Scroll-Driven Parallax Card Animation

An interactive, pure CSS scroll-driven card grid that creates a multi-layered depth (parallax) illusion as the page is scrolled.

## 🌟 What the Animation Demonstrates
This example demonstrates a staggered visual hierarchy where three cards appear to reside in different depth planes. As the user scrolls vertically, each card translates along the Y-axis at a different speed, creating a parallax 3D effect of foreground, midground, and background layers.

## 🛠️ How it Works
1. **Scroll-Driven Timeline**: We bind the card translation keyframes to the scroll progress of the viewport container using the modern CSS `animation-timeline: view()` and `animation-range: cover 0% cover 100%`.
2. **Viewport Relative Mapping**: The animation progress (from 0% to 100% of the keyframe duration) is interpolated by the browser's compositor as the card crosses into and out of the viewport.

## 💨 Staggered Speeds
The relative speed difference is achieved by scaling the vertical translation offset (`translateY`) in the card keyframes:
- **Layer 01 (Background)**: Shifted by `±30px` (`parallax-slow-kf`)
- **Layer 02 (Midground)**: Shifted by `±60px` (`parallax-medium-kf`)
- **Layer 03 (Foreground)**: Shifted by `±90px` (`parallax-fast-kf`)

Because Layer 03 has a larger translation delta than Layer 01, it traverses a larger distance in the same scrolling timeframe, making it appear closer to the user.

## 🚀 How to Use
Include the utility classes directly on your card wrappers:
- `.parallax-slow`: Background parallax layer
- `.parallax-medium`: Midground parallax layer
- `.parallax-fast`: Foreground parallax layer

```html
<div class="parallax-slow">Background Card</div>
<div class="parallax-medium">Midground Card</div>
<div class="parallax-fast">Foreground Card</div>
```

## ♿ Reduced-Motion Support
The example fully respects user accessibility preferences:
- A `@media (prefers-reduced-motion: reduce)` block disables all scroll timeline animations and removes `transform` offsets.
- When active, the cards sit completely flat in their normal static layout, allowing normal readability.

## 🌐 Browser Compatibility
- **Supported**: Modern Chromium-based browsers (Chrome, Edge, Opera, Chrome Android).
- **Fallback**: Safari, Firefox, and older legacy browsers that do not support `animation-timeline` will render the elements in a stable, static, and fully visible grid layout without layout shifts or content degradation.
