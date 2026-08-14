# CSS Variable Inspector

Resolves #36396

A lightweight, CSS-only utility that visually previews EaseMotion CSS's
design tokens — colors, gradients, spacing, border-radius, shadows, and
animation durations — so contributors and users can quickly discover and
compare available variables without digging through `core/variables.css`.

## Features

- Zero JavaScript, zero dependencies
- Fully responsive grid (auto-fits from 2 columns on mobile to N columns on desktop)
- Each card shows a live rendering of the token plus its variable name
- Animation-duration cards are interactive on hover, so you can *feel* the speed difference
- Falls back to sensible default values if `core/variables.css` isn't loaded, so the demo works standalone

## Files

- `demo.html` — standalone showcase page with all token categories
- `style.css` — all styling, using `var(--ease-*, fallback)` so it degrades gracefully

## How to use

Drop the `.ease-var-preview-tay` / `.ease-var-card-tay` markup into any docs
or demo page, referencing whichever `--ease-*` variable you want to preview:

```html
<div class="ease-var-preview-tay">
  <div class="ease-var-card-tay" style="--preview-color: var(--ease-color-primary);">
    <div class="ease-var-colorbox-tay"></div>
    <span>--ease-color-primary</span>
  </div>
</div>
```

## Notes for the maintainer

- Class names use the `-tay` suffix per the naming policy to avoid collisions;
  happy to have this standardized further as part of review.
- No changes made to `core/` or `components/` — everything lives in this
  submission folder.