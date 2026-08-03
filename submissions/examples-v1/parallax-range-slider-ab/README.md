# Parallax Range Slider — Dark Mode

**Implements:** #41568

---

## Overview

A pure CSS parallax range slider component inspired by Dark Mode design patterns. Features animated depth layers beneath the slider track creating a parallax effect, with a glowing neon thumb and smooth elastic hover animation. Zero JavaScript required.

## Features

- 3-layer parallax animation beneath slider track
- Neon glowing thumb with elastic hover scale
- 3 color variants: cyan (default), green, purple
- Keyboard accessible with focus-visible styles
- CSS custom properties for easy customization
- prefers-reduced-motion support
- Fully responsive

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--slider-primary` | `#00d4ff` | Thumb and glow color |
| `--slider-track-h` | `6px` | Track height |
| `--slider-thumb-size` | `22px` | Thumb diameter |
| `--slider-duration` | `0.3s` | Hover animation duration |
| `--slider-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic easing |

## Usage

```html
<div class="slider-wrap">
  <div class="parallax-track">
    <div class="parallax-layer layer-1"></div>
    <div class="parallax-layer layer-2"></div>
    <div class="parallax-layer layer-3"></div>
  </div>
  <input type="range" class="ease-range" min="0" max="100" value="60">
</div>
```

## Color Variants

Add `.green` or `.purple` to both `.parallax-layer` elements and `.ease-range`:

```html
<input type="range" class="ease-range green">
```

## How to Preview

1. Open `demo.html` in any modern browser
2. Drag the sliders to interact
3. Hover over the thumb to see elastic scale animation
4. No build step required

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 90+            |
| Firefox | 88+            |
| Safari  | 14+            |
| Edge    | 90+            |