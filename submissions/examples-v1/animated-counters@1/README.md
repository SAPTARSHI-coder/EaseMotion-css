# Animated Number Counters & Statistics

This is a self-contained example demonstrating how to create animated number counters, circular progress indicators, and linear progress bars using modern CSS and minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🔢 **Animated Number Counters:** Numbers count up smoothly when scrolled into view.
- 🎯 **Circular Progress Indicators:** SVG-based circular progress with smooth fill animations.
- 📊 **Linear Progress Bars:** Animated progress bars with shimmer effects.
- 🎨 **Gradient Text:** Counter numbers use gradient text for visual appeal.
- ✨ **Hover Effects:** Cards lift and glow on hover for interactivity.
- 🎬 **Scroll-Triggered:** Animations trigger when elements come into viewport using Intersection Observer.
- 💫 **Staggered Animations:** Elements fade in with staggered delays using EaseMotion utilities.
- ♿ **Fully Accessible:** Respects `prefers-reduced-motion` for users who prefer less animation.
- 📱 **Responsive:** Adapts to mobile screens with adjusted sizes.
- 🚫 **Minimal JavaScript:** Only for counter animations and scroll detection.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Add the HTML structure for counters, circular progress, or linear progress.
4. Set the `data-target` attribute for counters (e.g., `data-target="15000"`).
5. Set the `data-progress` attribute for progress indicators (0-100).
6. Include the JavaScript at the bottom of your page.

## Counter Configuration

### Number Counters
```html
<div class="counter" data-target="15000">
  <span class="counter__value">0</span>
  <span class="counter__suffix">+</span>
</div>