# Animated Carousel with Minimalist Styling

A responsive CSS-only carousel built around a clean minimalist visual
language.

The component combines automatic CSS motion with native radio controls
so users can manually select each slide without JavaScript.

## Features

- CSS-only carousel
- Automatic slide transitions
- Manual slide selection
- Minimalist visual design
- Responsive layout
- Native radio controls
- Smooth CSS transitions
- Hover interactions
- Semantic links
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

The carousel uses radio inputs to control the active slide:

```html
<input
  class="carousel__radio"
  type="radio"
  name="carousel"
  id="slide-1"
  checked
/>

<input
  class="carousel__radio"
  type="radio"
  name="carousel"
  id="slide-2"
/>

<input
  class="carousel__radio"
  type="radio"
  name="carousel"
  id="slide-3"
/>