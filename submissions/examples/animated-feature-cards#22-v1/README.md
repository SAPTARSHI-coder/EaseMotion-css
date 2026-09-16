# Animated Feature Cards

Modern animated feature cards built with pure HTML and CSS. Useful for landing pages, product features, startup websites, and portfolio sections.

## Features

- Pure HTML and CSS implementation.
- Animated card entrance with staggered delay.
- Hover lift and glow effects.
- Colorful icon variants.
- Responsive grid layout.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<article class="feature-card">
  <div class="feature-icon purple">
    <!-- SVG icon -->
  </div>

  <h2>Feature Title</h2>
  <p>Feature description goes here.</p>

  <a href="#" class="feature-link">
    Learn more
    <span class="feature-arrow">→</span>
  </a>
</article>