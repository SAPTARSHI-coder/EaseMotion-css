# Animated Spinner with Neon Styling

A futuristic loading spinner built with HTML and CSS.

The component combines multiple animated neon rings, a glowing core,
floating particles, and a progress indicator to create a modern
cyber-inspired loading experience.

## Features

- Fully responsive
- Pure HTML and CSS
- Multiple animated spinner rings
- Neon cyan, pink, and lime accents
- Glowing center core
- Floating particles
- Animated loading dots
- Progress indicator
- Additional color variants
- No JavaScript
- No external dependencies
- Reduced-motion support

## Files

- `demo.html`
- `style.css`

## Main Spinner

```html
<div
  class="neon-spinner"
  role="status"
  aria-label="Loading"
>
  <span class="neon-spinner__ring neon-spinner__ring--outer"></span>
  <span class="neon-spinner__ring neon-spinner__ring--middle"></span>
  <span class="neon-spinner__ring neon-spinner__ring--inner"></span>

  <span class="neon-spinner__core">
    <span class="neon-spinner__dot"></span>
  </span>

  <span class="neon-spinner__particle neon-spinner__particle--one"></span>
  <span class="neon-spinner__particle neon-spinner__particle--two"></span>
  <span class="neon-spinner__particle neon-spinner__particle--three"></span>
  <span class="neon-spinner__particle neon-spinner__particle--four"></span>
</div>