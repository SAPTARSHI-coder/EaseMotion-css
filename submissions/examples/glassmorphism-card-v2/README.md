# ✨ CSS Glassmorphism Card v2

A modern glassmorphism card with a translucent surface, backdrop blur,
animated gradient border glow, and subtle hover interaction.

This component is built entirely with HTML and CSS.

## Features

- Pure CSS implementation
- No JavaScript
- Glassmorphism effect
- `backdrop-filter` blur
- Animated gradient border
- Soft glow effects
- Hover elevation
- Responsive layout
- Reduced-motion support
- No external dependencies

## Usage

Add the card structure to your page:

```html
<article class="glass-card">
  <div class="card-content">
    <div class="card-icon" aria-hidden="true">
      ✦
    </div>

    <div class="card-heading">
      <p class="card-label">EASEMOTION</p>
      <h2>Crystal UI</h2>
    </div>

    <p class="card-description">
      A modern glass interface enhanced with translucent layers,
      backdrop blur, and a shifting border glow.
    </p>

    <div class="card-footer">
      <span class="status">
        <span class="status-dot" aria-hidden="true"></span>
        Motion Active
      </span>

      <span class="card-version">v2.0</span>
    </div>
  </div>
</article>