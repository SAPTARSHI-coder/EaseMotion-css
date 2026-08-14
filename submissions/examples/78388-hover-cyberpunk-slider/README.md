# Hover Slider with Cyberpunk Styling

A responsive CSS-only hover slider built around a futuristic Cyberpunk
visual language.

The component uses expanding panels, neon accents, animated geometric
elements, scanlines, and responsive stacking to create an interactive
hover-based slider without JavaScript.

## Features

- CSS-only hover slider
- Expandable panels on hover
- Four independent content panels
- Cyberpunk visual styling
- Neon cyan, purple, pink, and lime accents
- Animated geometric visuals
- Scanline effects
- Responsive desktop layout
- Responsive stacked mobile layout
- Hover and focus interactions
- Semantic links
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

The slider is created with multiple article panels:

```html
<div class="slider">
  <article class="slide slide--active">
    ...
  </article>

  <article class="slide slide--purple">
    ...
  </article>

  <article class="slide slide--pink">
    ...
  </article>

  <article class="slide slide--lime">
    ...
  </article>
</div>