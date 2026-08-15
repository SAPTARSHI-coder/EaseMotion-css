# Retro Pixel Ticker Marquee Row

A retro-inspired pixel ticker marquee with configurable CSS custom
properties, accessible markup, and reduced-motion support.

## Features

- Retro pixel-style visual treatment
- Horizontal marquee animation
- Configurable theme variables
- Adjustable ticker speed
- Responsive layout
- Pause/resume control
- Keyboard-accessible button
- Visible keyboard focus state
- `prefers-reduced-motion` support

## Basic Markup

```html
<div class="ticker">
  <div class="ticker-track">
    <span class="ticker-item">NEW UPDATE</span>
    <span class="pixel-separator">◆</span>

    <span class="ticker-item">CSS MOTION</span>
    <span class="pixel-separator">◆</span>

    <span class="ticker-item">OPEN SOURCE</span>
    <span class="pixel-separator">◆</span>
  </div>
</div>