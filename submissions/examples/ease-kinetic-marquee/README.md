# Kinetic Typography Marquee

Outline-only kinetic typography that smoothly scrolls across a section background, pure CSS marquee with -webkit-text-stroke.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — styles (pure CSS where possible; minimal vanilla JS only where interaction requires it)
- `README.md` — this guide


## Usage
```html
<link rel="stylesheet" href="./style.css" />
<section class="ease-kinetic-marquee" aria-hidden="true"><div class="ease-kinetic-marquee__track"><span class="ease-kinetic-marquee__text">CREATIVE STUDIO</span><span class="ease-kinetic-marquee__text">CREATIVE STUDIO</span></div></section>
```


## Accessibility
- Decorative animation elements marked `aria-hidden="true"`.
- Interactive controls use native elements with `:focus-visible` outlines.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #74240
