# CSS Feature Grid v2

A responsive four-column feature grid with colorful icons and
subtle CSS-only hover animations.

## Features

- Pure HTML and CSS
- Four-column desktop layout
- Two-column tablet layout
- Single-column mobile layout
- Individual accent colors for every feature
- Hover lift animation
- Animated icon interaction
- Animated decorative background element
- Keyboard-accessible links
- Reduced-motion support
- Forced-colors support
- No JavaScript required

## Structure

Each feature contains:

- An icon
- A feature title
- A short description
- An action link

## Usage

```html
<div class="feature-grid">
  <article class="feature-card">
    <div class="icon">
      <span>⚡</span>
    </div>

    <h2>Fast Performance</h2>

    <p>
      Lightweight CSS interactions keep interfaces smooth and responsive.
    </p>

    <a href="#feature" class="feature-link">
      Explore feature <span aria-hidden="true">→</span>
    </a>
  </article>
</div>