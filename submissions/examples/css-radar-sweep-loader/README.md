# CSS Radar Sweep Loader

A pure CSS radar sweep loader inspired by radar-screen scanning animations.

## Features

- Pure HTML and CSS
- No JavaScript required
- Animated radar sweep using `conic-gradient()`
- Concentric radar rings
- Crosshair guides
- Pulsing detection points
- CSS custom properties for easy customization
- Responsive layout
- Light and dark mode support
- Reduced-motion support

## Usage

Add the loader markup to your HTML:

```html
<div
  class="radar-loader"
  role="status"
  aria-label="Loading"
>
  <span class="radar-ring radar-ring-one"></span>
  <span class="radar-ring radar-ring-two"></span>
  <span class="radar-ring radar-ring-three"></span>

  <span class="radar-crosshair radar-crosshair-horizontal"></span>
  <span class="radar-crosshair radar-crosshair-vertical"></span>

  <span class="radar-sweep"></span>

  <span class="radar-dot radar-dot-one"></span>
  <span class="radar-dot radar-dot-two"></span>
  <span class="radar-dot radar-dot-three"></span>

  <span class="radar-center"></span>
</div>