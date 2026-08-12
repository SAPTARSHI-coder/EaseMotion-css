# Ease Smooth Scroll To Top

## Description
A scroll-to-top button that fades in after scrolling down, smoothly scrolls the page back to top on click, with a bouncing arrow icon and a circular progress ring showing scroll position.

## Acceptance Criteria Covered
- Button fades in on scroll (`.is-visible` class toggled past a scroll threshold)
- Smooth scroll to top on click (`window.scrollTo({ behavior: 'smooth' })`)
- Arrow bounce animation (`arrow-bounce` keyframes)
- Progress ring around button (SVG ring, `stroke-dashoffset` tied to scroll percentage)

## Usage
Include `style.css`, add the button markup with both ring SVG and arrow SVG (see `demo.html`), and copy the scroll-listener script to wire up visibility + progress + click-to-scroll.

## Files
- `demo.html` — live working example
- `style.css` — component styles
- `README.md` — this file