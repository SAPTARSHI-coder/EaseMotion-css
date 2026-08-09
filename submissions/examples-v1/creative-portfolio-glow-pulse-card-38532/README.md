# Creative Portfolio Glow Pulse Card

## Description
A pure CSS project card for creative-portfolio layouts with a smooth **glow pulse** interaction: on hover or keyboard focus, the card lifts slightly and breathes a soft, colour-matched glow in an infinite loop for as long as the interaction lasts. Zero JavaScript.

## Features
- Continuous glow + scale "pulse" on hover/focus, driven entirely by one CSS `@keyframes` animation
- Fully keyboard accessible — the whole card is a real `<a>` link, so it's reachable with Tab and activatable with Enter with no `tabindex` hacks
- Every interaction parameter (duration, easing, scale, glow colour) is exposed as a CSS custom property
- `(hover: hover) and (pointer: fine)` guard so the glow doesn't get stuck "on" after a tap on touchscreens
- Respects `prefers-reduced-motion` — the loop stops and a static glow is shown instead
- Fully responsive: fluid width via `min()`, plus a mobile padding/type tweak at 640px

## How is it used?
```html
<a class="portfolio-glow-card" href="/projects/solace">
  <div class="pgc-thumb" aria-hidden="true"><span class="pgc-thumb-icon">🎨</span></div>
  <div class="pgc-body">
    <span class="pgc-tag">Brand Identity</span>
    <h3 class="pgc-title">Solace — Visual Identity</h3>
    <p class="pgc-desc">Short project description.</p>
    <span class="pgc-cta">View project →</span>
  </div>
</a>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--pgc-pulse-duration` | `2.4s` | Full pulse animation cycle length |
| `--pgc-pulse-easing` | `ease-in-out` | Timing function for the pulse loop and the settle-back transition |
| `--pgc-pulse-scale` | `1.035` | Peak scale factor at the midpoint of the pulse |
| `--pgc-glow-color` | `rgba(168, 85, 247, 0.55)` | Glow colour (any valid CSS colour) |
| `--pgc-radius` | `20px` | Card corner radius |
| `--pgc-bg` | `#15131f` | Card background |
| `--pgc-fg` | `#f4f2fa` | Card text colour |
| `--pgc-accent` | `#c084fc` | Tag / CTA accent colour |

Override any of these inline or from your own stylesheet:
```html
<a class="portfolio-glow-card" href="#" style="--pgc-glow-color: rgba(251,146,60,.55); --pgc-accent:#fdba74;">
  ...
</a>
```

## Why is it useful?
EaseMotion already ships one-shot hover animations, but a **looping, interaction-scoped** pulse — one that only runs while the user is actually engaged with the element and cleanly stops the moment they leave — is a distinct, frequently-requested pattern for portfolio and gallery-style layouts (issue #38532). It's zero-dependency, fully themeable through custom properties, and reuses the same glow + border-color visual language already established by `.ease-card-glow` in `components/cards.css`, so it should standardize in cleanly alongside it.

## Files
- `demo.html` — two live variants (default violet + an amber override) showing the custom-property theming
- `style.css` — the component
- `README.md` — this file