# CSS Fade-In Feature Grid for Fintech Dashboard Layouts

## Description
Fixes #59417 — a pure CSS feature grid with a staggered fade-in-up entrance
animation per card, designed for fintech dashboard "what you get" /
features overview sections.

## Usage
```html
<div class="ease-features">
  <div class="ease-features__card">
    <span class="ease-features__icon">📈</span>
    <p class="ease-features__title">Real-Time Analytics</p>
    <p class="ease-features__desc">Short supporting description.</p>
  </div>
  <!-- repeat for each feature -->
</div>
```

The grid supports any number of cards — it auto-collapses from 3 to 2 to
1 columns based on viewport width.

## Custom Properties
Uses `--ease-color-primary` (falls back to `#2563eb`) and
`--ease-color-primary-soft` (falls back to `#eff6ff`) for the icon accent
color and background — consistent with the framework's existing custom
property convention.

## Features
- Pure CSS/HTML — no JavaScript required
- Staggered fade-in-up entrance animation per card (`nth-child` delays,
  supports up to 6 explicitly staggered cards, more cards reuse the last delay)
- 3-column responsive grid, collapsing to 2 columns below 900px and
  1 column below 560px
- Subtle hover state (border + shadow) once entrance animation completes
- Dark mode support via `prefers-color-scheme: dark`
- Respects `prefers-reduced-motion: reduce` — skips the fade-in animation
  entirely, cards render at full opacity immediately

## Testing
Open `demo.html` in a browser and reload to see the staggered fade-in.
Resize the window to check the 3 → 2 → 1 column responsive breakpoints,
and toggle your OS "reduce motion" setting to verify the fallback.