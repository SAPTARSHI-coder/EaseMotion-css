# Geometric Clip-Path Utilities (`ease-clip-path-polygons`)

A set of structural CSS utilities leveraging `clip-path: polygon()` to instantly generate common geometric shapes out of standard DOM elements.

## 🚀 Features & EaseMotion Showcase

- **Zero Images/SVG**: Creates crisp, scalable geometry entirely in CSS without external assets.
- **Animation Ready**: `clip-path` properties can be cleanly transitioned and animated natively by the browser.
- **Drop-Shadow Compatible**: Shows how to use `filter: drop-shadow()` to apply shadows to clipped elements (since `box-shadow` gets clipped!).
- **Core Shapes**: Includes `triangle`, `diamond`, `pentagon`, and `hexagon` utilities.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

```html
<!-- Simply apply the class to an element with width and height -->
<div class="clip-path-polygon-hexagon" style="width: 100px; height: 100px; background: blue;"></div>
