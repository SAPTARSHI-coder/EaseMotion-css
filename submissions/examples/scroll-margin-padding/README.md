# Scroll Margin &amp; Padding

## What does it do?
A pure-CSS demo showing how to control scroll position using `scroll-margin` and `scroll-padding` properties — no JavaScript required.

## Features
- **scroll-margin** — offset when scrolling to target elements via anchor links
- **scroll-padding** — padding on the scroll container
- **scroll-behavior: smooth** — smooth scrolling animation
- **Sticky navigation** — demo navigation bar with anchor links
- **Reduced Motion** — respects `prefers-reduced-motion`

## Usage
```css
/* Target section offset */
section { scroll-margin: 4rem; }

/* Container padding */
.container { scroll-padding: 2rem; }

/* Smooth scrolling */
html { scroll-behavior: smooth; }
```

## Classes
- `.sm-small` — scroll-margin: 2rem
- `.sm-large` — scroll-margin: 6rem (for fixed headers)
- `.sm-custom` — scroll-margin: 4rem 2rem (per-axis)
- `.sm-none` — no scroll-margin
- `.scroll-nav` — sticky navigation bar
- `.scroll-container` — container with scroll-padding

## Browser Support
- `scroll-margin` — Chrome 69+, Firefox 68+, Safari 11+
- `scroll-padding` — Chrome 69+, Firefox 68+, Safari 11+
- `scroll-behavior` — Chrome 61+, Firefox 36+, Safari 15.4+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
