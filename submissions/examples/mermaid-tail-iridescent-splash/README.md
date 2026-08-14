# Mermaid Tail · Iridescent Tail Splashes on Interaction

An interactive mermaid tail with iridescent shimmering scales and graceful wave motion; click or Spacebar triggers a burst of sparkling water particles. Minimal vanilla JS for the splash interaction.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — styles (pure CSS where possible; minimal vanilla JS only where interaction requires it)
- `README.md` — this guide
- `splash.js` — minimal vanilla JS for the click/Spacebar splash interaction (progressive)

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<div class="ease-mti"><div class="ease-mti__bubbles" aria-hidden="true"></div><div class="ease-mti__tail" role="img" aria-label="Mermaid tail with iridescent scales"><span class="ease-mti__scale" style="--i:0"></span><span class="ease-mti__scale" style="--i:1"></span><span class="ease-mti__scale" style="--i:2"></span><span class="ease-mti__scale" style="--i:3"></span><span class="ease-mti__scale" style="--i:4"></span></div><p class="ease-mti__hint" id="mti-hint">Click or press Space to splash</p><div class="ease-mti__splash" aria-hidden="true"></div></div>
```

```html
<script src="./splash.js" defer></script>
```

## Accessibility
- Decorative animation elements marked `aria-hidden="true"`.
- Interactive controls use native elements with `:focus-visible` outlines.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #76086
