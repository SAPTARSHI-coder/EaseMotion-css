# Animated Image Reveal Effect Gallery

## Abstract

This module provides a pure CSS animation suite featuring 4 distinct animated image reveal effects (Horizontal Curtain Slide, Vertical Slide, Diagonal Slice, and Clip-Path Circle Zoom). Designed for modern portfolio, showcase, and gallery layouts, these hardware-accelerated entrance animations deliver fluid visual polish without external animation library dependencies.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a curated collection of 4 unique CSS-only animated image reveal techniques (Horizontal Curtain Slide, Vertical Slide, Diagonal Slice, and Clip-Path Circle Zoom).

### 2. How is it used?
Apply the `.ease-reveal-media` container class along with a technique modifier (`reveal-horizontal`, `reveal-vertical`, `reveal-diagonal`, or `reveal-clip-circle`) around any responsive `<img>` element.

```html
<div class="ease-reveal-media reveal-horizontal">
  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60" alt="Abstract 3D Shape">
</div>
```

### 3. Why is it useful?
Enhances portfolio and gallery interfaces with engaging, hardware-accelerated image entrances without requiring heavy JavaScript scroll or animation libraries.

## Reveal Techniques & Architecture

The reveal component relies on CSS pseudo-elements (`::after`) and keyframe animations to perform high-performance transforms:

- **Horizontal Curtain Slide (`.reveal-horizontal`)**: Uses an absolute overlay (`::after`) colored with `--rev-curtain` that translates smoothly along the X-axis from `0%` to `100%`.
- **Vertical Slide (`.reveal-vertical`)**: Uses a curtain overlay that slides down the Y-axis from `0%` to `100%` using smooth cubic-bezier easing.
- **Diagonal Slice (`.reveal-diagonal`)**: Rotates an expanded overlay box by 45deg and translates it offscreen diagonally (`translateY(0)` to `translateY(150%)`).
- **Clip-Path Circle Zoom (`.reveal-clip-circle`)**: Animates CSS `clip-path: circle()` directly on the `<img>` element from `0%` radius up to `120%` while scaling down smoothly from `1.1` to `1`.

All animations feature hardware acceleration using `transform` and `clip-path` properties to guarantee 60 FPS performance. A DOM reflow replay capability is supported via JavaScript class toggling (`.is-animating`).

## Custom CSS Properties

Easily customize colors, layout tokens, and accent highlights through native CSS custom properties defined on `:root`:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--rev-bg` | `#030712` | Main background color |
| `--rev-surface` | `#0f172a` | Container stage surface background |
| `--rev-card-bg` | `#1e293b` | Individual card container background |
| `--rev-border` | `rgba(255, 255, 255, 0.1)` | Border styling token |
| `--rev-text` | `#f8fafc` | Primary text color |
| `--rev-muted` | `#94a3b8` | Muted secondary text color |
| `--rev-accent` | `#3b82f6` | Button primary accent color |
| `--rev-curtain` | `#38bdf8` | Horizontal curtain reveal color |
