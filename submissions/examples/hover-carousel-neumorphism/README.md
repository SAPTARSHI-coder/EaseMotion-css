# Hover Carousel with Neumorphism Styling

A pure CSS tactile hover carousel component built with soft neumorphic light and drop shadow techniques (`box-shadow: 6px 6px 12px ...`). Features smooth hover focus expansions and inset depth controls without external JavaScript libraries.

## How it works

The carousel employs dual-layered drop and ambient highlights (`var(--ease-neu-shadow-dark)` and `var(--ease-neu-shadow-light)`). Slide elements (`.ease-neu-slide`) transition between extruded outer shadows in resting states to deeper offset shadows on hover (`translateY(-6px)`), and inset shadows on active click states (`box-shadow: inset ...`). Touch scrolling is powered by CSS Scroll Snap (`scroll-snap-type: x mandatory`).

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-neu-bg`: Main surface background (`#e0e5ec`)
- `--ease-neu-text`: Primary text color (`#2d3748`)
- `--ease-neu-muted`: Subtitle description text (`#718096`)
- `--ease-neu-accent`: Accent highlight color (`#3182ce`)
- `--ease-neu-shadow-light`: Highlight light source (`#ffffff`)
- `--ease-neu-shadow-dark`: Soft drop shadow color (`#a3b1c6`)
- `--ease-neu-duration`: Elevation transition speed (`0.4s`)

## Accessibility & Performance

- Fully accessible using semantic markup (`<article>`, `role="region"`, `aria-label`), keyboard focus management (`tabindex="0"`, `:focus-visible`), and touch scroll snaps.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables scale and translate transform animations.