# CSS Ripple-Wave Tooltip (Gaming Hub Layouts)

A pure CSS-animated Tooltip featuring a dynamic **Ripple-Wave** interaction transition designed for competitive **Gaming Hub & eSports Telemetry Layouts**.

## Features

- **EaseMotion Integrated**: Uses core design variables and the `.ease-squish-button` micro-interaction utility class.
- **Concentric Ripple-Wave Animation**: Triggers expanding concentric energy rings (`@keyframes rippleWave`) whenever the user hovers or focuses on a HUD badge.
- **Modern CSS APIs**: Leverages `allow-discrete` and `@starting-style` for performant, seamless tooltip entrance and exit scaling.
- **Multi-Directional**: Supports top (`data-position="top"`) and bottom (`data-position="bottom"`) placements with aligned connector arrows.
- **Accessible & Responsive**: Full keyboard focus navigation and `@media (prefers-reduced-motion: reduce)` support that disables infinite animation loops in favor of a clean static highlight ring.

## Custom Properties

```css
:root {
  --ripple-duration: 2.6s;
  --tooltip-scale: 0.92;
  --neon-cyan: #00f0ff;
  --neon-purple: #8b5cf6;
}
```

## Usage

Include `easemotion.css` and `style.css`, then wrap your trigger button and tooltip inside `.tooltip-container`:

```html
<div class="tooltip-container">
  <button class="telemetry-btn ease-squish-button" aria-describedby="tip">Hover Me</button>
  <div class="tooltip-wrapper" id="tip" role="tooltip" data-position="top">
    <div class="tooltip-box">
      <span class="ripple-ring"></span>
      <span class="ripple-ring"></span>
      <div class="tooltip-arrow"></div>
      <h2 class="tooltip-title">Title</h2>
      <p class="tooltip-desc">Description</p>
    </div>
  </div>
</div>
```
