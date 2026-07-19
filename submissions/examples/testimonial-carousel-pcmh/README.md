# Testimonial Carousel — Issue #7421

## Overview

Testimonial carousel with slide-in animation, star ratings, author bios, dot indicators, and auto-rotation with pause-on-hover.

## Features

- Slide-in/out animation on navigation
- Quote icon, italic text, star ratings (★)
- Author avatar + name + title
- Previous/next buttons with hover scale
- Dot indicators with active pill style
- Auto-rotation (4s) with pause on hover
- Fully responsive

## Usage

```html
<div class="ease-testimonial-carousel">
  <div class="ease-testimonial-track" id="track"><!-- slides --></div>
  <div class="ease-testimonial-nav">
    <button class="ease-testimonial-btn">‹</button>
    <div class="ease-testimonial-dots"><!-- dots --></div>
    <button class="ease-testimonial-btn">›</button>
  </div>
</div>
```

## States

| State | Behavior |
|-------|----------|
| Active dot | Pill shape, primary color |
| Button hover | Scale 1.1, background tint |
| Auto-rotation | Cycles every 4 seconds |
| Hover on carousel | Pauses auto-rotation |
| Mobile | Reduced padding, smaller text |

## Files

- `demo.html` — Interactive carousel with 4 testimonials
- `style.css` — Carousel and testimonial styles
- `README.md` — This documentation
