# Documentation: Dark Mode Dual Range Slider - Quickstart Guide (#986098)

Comprehensive quickstart guide, markup examples, and usage documentation for the EaseMotion library's **Dark Mode Dual Range Slider** component (`#986098`), fully addressing issue `#85969`.

## 🚀 Quickstart Overview

- **Dark Mode Aesthetic:** Deep slate background with glowing purple-to-pink gradient track fills and luminous thumb handles.
- **Custom CSS Property Overrides:** Easily adjust color tokens, thumb sizes, and glow intensity.
- **Accessibility Setup:** Built-in keyboard focus states (`:focus-visible`), explicit aria labels, and `@media (prefers-reduced-motion: reduce)` support.

## 🛠️ HTML Markup Example

```html
<div class="ease-dark-dual-slider" aria-label="Dark Mode Dual Range Slider Element" tabindex="0">
    <div class="em-slider-track-bg"></div>
    <div class="em-slider-track-fill" style="left: 20%; width: 60%;"></div>
    <input type="range" class="em-range-input em-range-min" min="0" max="100" value="20" aria-label="Minimum Range Value">
    <input type="range" class="em-range-input em-range-max" min="0" max="100" value="80" aria-label="Maximum Range Value">
</div>
