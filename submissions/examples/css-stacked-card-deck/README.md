# CSS-Only Stacked Card Deck Animation

## Overview

A CSS-only stacked card deck where multiple cards appear as a single
stack and smoothly fan apart when the user hovers over the deck.

The effect uses absolute positioning, `:nth-child()` selectors,
CSS transforms, transitions, and box shadows to create depth and
movement without JavaScript.

## Features

- Pure CSS and HTML
- Multiple cards stacked in one deck
- Different starting rotations and scales
- Hover-based fan-out interaction
- `:nth-child()` positioning
- Smooth CSS transitions
- Layered box shadows for depth
- Responsive desktop and mobile layouts
- No JavaScript
- No external dependencies
- `prefers-reduced-motion` support

## Files

- `demo.html` — Self-contained demonstration
- `style.css` — Card deck styles and animation
- `README.md` — Documentation

## Usage

Create a parent deck:

```html
<div class="case-card-deck">

    <article class="case-card">
        <h2>First Card</h2>
        <p>Card content.</p>
    </article>

    <article class="case-card">
        <h2>Second Card</h2>
        <p>Card content.</p>
    </article>

</div>