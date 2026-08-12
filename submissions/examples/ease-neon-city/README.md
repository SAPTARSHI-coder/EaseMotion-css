# Ease Neon City Background

## 1. What does this do?
This component renders a cyberpunk-style neon city skyline background with animated traffic light trails and realistic water reflections using pure CSS math and animations.

## 2. How is it used?
The effect is achieved purely through HTML and CSS:
- `clip-path: polygon()` is used to chisel building shapes directly out of a solid dark `div`.
- Glowing backlights are created using blurred linear gradients (`filter: blur(...)`).
- Animated traffic light trails run across the skyline base using repeating linear gradients and `@keyframes`.
- `transform: scaleY(-1)` mirrors the skyline downwards, while a fading `mask-image` (`linear-gradient`) and subtle blur produce a realistic reflective water layer underneath the city.

## 3. Why is it useful?
- **Zero Asset Dependencies:** Generating geometry through CSS math rather than `.png` or `.svg` image files eliminates extra HTTP requests.
- **Ultra-Lightweight & Performant:** Keeps the DOM clean and minimal while maintaining GPU-accelerated keyframe animations.
- **Resolution-Independent:** Scales seamlessly and remains perfectly crisp on high-DPI retina displays of any screen size.
