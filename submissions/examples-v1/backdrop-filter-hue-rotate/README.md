# Backdrop Filter Hue-Rotate CSS Demo — EaseMotion CSS

A premium, interactive demonstration of CSS `backdrop-filter: hue-rotate()` utility classes, preset degrees, hover transitions, and performance best practices.

## What does this do?

This demo highlights the capabilities of the CSS `backdrop-filter: hue-rotate(...)` property, allowing designers and developers to create shifting color lenses over colorful background assets. It features:

- **Interactive Color Sandbox**: A draggable glass panel floating over dynamic, high-contrast canvas styles (Spectrum color wheel grid, custom geometric SVGs, mock dashboard analytics).
- **Dual Parameter Sliders**: Real-time playground to adjust hue rotation angle (`0°` to `360°`) and blur radius (`0px` to `30px`) simultaneously.
- **Preset Utility scale**: Predefined classes (`.ease-backdrop-hue-rotate-60` to `300`) to rotate backdrop colors instantly.
- **Hover Transition Triggers**: Micro-interaction patterns showing how to animate hue-rotate transitions on cursor entrance using transition helpers.
- **Fallback Compliance**: Demonstrates design fallbacks for legacy browsers lacking backdrop filter compatibility.

## How is it used?

Apply the core utility class along with transition helpers to any overlay panel, floating header, or card:

```html
<!-- Instant preset backdrop shift -->
<div class="glass-card ease-backdrop-hue-rotate-180">
  <p>Complementary shifted text.</p>
</div>

<!-- Hover transition container -->
<div
  class="custom-card ease-transition-backdrop ease-hover-backdrop-hue-rotate-180"
>
  <p>Hover to flip background hues.</p>
</div>
```

```css
/* Core stylesheet utility mappings */
.ease-backdrop-hue-rotate-180 {
  backdrop-filter: hue-rotate(180deg);
  -webkit-backdrop-filter: hue-rotate(180deg);
}

.ease-transition-backdrop {
  transition:
    backdrop-filter 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    -webkit-backdrop-filter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: backdrop-filter;
}

.ease-hover-backdrop-hue-rotate-180 {
  backdrop-filter: hue-rotate(0deg);
  -webkit-backdrop-filter: hue-rotate(0deg);
}

.ease-hover-backdrop-hue-rotate-180:hover {
  backdrop-filter: hue-rotate(180deg);
  -webkit-backdrop-filter: hue-rotate(180deg);
}
```

## Why is it useful?

- **Dynamic Chromatic Artistry**: Creates glowing neon visual textures and glassmorphic layouts that feel responsive and alive.
- **Micro-Interactions**: Provides creative status feedback, card highlights, and tap responses on UI buttons, side panels, and tooltips.
- **Visual Segregation**: Helps separate overlay panels from busy page layouts by shifting context colors rather than just introducing solid dark/light overlays.
- **GPU Rendering**: Utilizes hardware acceleration for smooth 60fps filter transitions without layout redraws.

## Tech Stack

- HTML5 (semantic layout & custom inline SVGs)
- CSS3 (backdrop-filters, CSS custom properties, grid layouts, keyframe animation)
- JavaScript (draggable mouse/touch state tracking, theme selector, active tabs, clipboards)

## Preview

Open `demo.html` in your web browser to test the utility preset scales and range sandbox.
