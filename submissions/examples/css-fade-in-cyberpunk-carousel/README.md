# CSS Fade-In Carousel for Cyberpunk Neon Layouts

## Overview

A CSS-only fade-in carousel designed for futuristic and cyberpunk
interface layouts.

Multiple content cards occupy the same position and are displayed
sequentially using CSS keyframe animations. Each card fades in,
remains visible, and then fades out before the next card appears.

No JavaScript or external framework is required.

## Features

- Pure HTML and CSS
- CSS-only carousel
- Sequential fade-in and fade-out transitions
- Cyberpunk neon visual style
- Layered gradients
- Perspective grid background
- Responsive desktop, tablet, and mobile layout
- No JavaScript
- No external dependencies
- `prefers-reduced-motion` support

## Files

- `demo.html` — Self-contained carousel demonstration
- `style.css` — Carousel styling and animations
- `README.md` — Documentation

## Usage

Create multiple cards inside a `.carousel` container:

```html
<section class="carousel">

    <article class="carousel-card card-one">
        <h2>First Card</h2>
        <p>Content for the first slide.</p>
    </article>

    <article class="carousel-card card-two">
        <h2>Second Card</h2>
        <p>Content for the second slide.</p>
    </article>

</section>