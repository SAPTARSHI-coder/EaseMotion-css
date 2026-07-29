# CSS Aspect Ratio Responsive Embeds Feature

Submits responsive layout utility tokens and self-contained sizing canvas previews (`.ease-aspect-*`, `.ease-embed-fluid`) under issue #15396.

## Functional Mechanics

- **The Problem:** Scaling embedded iframes, responsive map views, HTML5 streaming video panels, or data cards across fluctuating mobile breakpoints while protecting their sizing locks has traditionally been error-prone. The historic method relied on complex relative padding tricks (`position: relative; padding-top: 56.25%; height: 0;`), which requires absolute sub-element absolute tracking layers and breaks grid alignment behavior.
- **The Solution:** Native box aspect ratios. The `.ease-aspect-*` utilities employ standard W3C `aspect-ratio` parameters. By directly declaring the mathematical bounding ratio (e.g., `16 / 9`) alongside a single flexible width rule (`width: 100%`), elements automatically scale their height fluidly to fit mobile and desktop viewports with zero layout shifts.

## Usage Layout Structure
```html
<div class="grid-card-wrapper">
  
  <iframe class="ease-aspect-video ease-embed-fluid" src="https://example.com/stream"></iframe>
</div>
```

Closes #15396
