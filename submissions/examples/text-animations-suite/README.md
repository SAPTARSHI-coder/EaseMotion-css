# Text Animation Suite

A pure CSS Text Animations Suite featuring 6 modular animated typography effects: Gradient Wave, Neon Glow Pulse, Kinetic Pop, Cyber RGB Glitch, Metallic Shimmer, and Typewriter Cursor.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — styles (pure CSS where possible; minimal vanilla JS only where interaction requires it)
- `README.md` — this guide


## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-tas">
  <h1 class="ease-tas__gradient-wave">Gradient Wave</h1>
  <h1 class="ease-tas__neon-glow">Neon Glow</h1>
  <h1 class="ease-tas__kinetic-pop">Kinetic Pop</h1>
  <h1 class="ease-tas__cyber-glitch">Cyber Glitch</h1>
  <h1 class="ease-tas__metallic-shimmer">Metallic</h1>
  <h1 class="ease-tas__typewriter">Typewriter</h1>
</div>
```


## Accessibility
- Decorative animation elements marked `aria-hidden="true"`.
- Interactive controls use native elements with `:focus-visible` outlines.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #75178
