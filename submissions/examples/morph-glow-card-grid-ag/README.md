# Morph-Glow Card Grid

A pure CSS/HTML showcase example for creative portfolio layouts. Cards morph their border-radius into an organic blob shape and emit an animated conic-gradient glow on hover/focus — no JavaScript required.

## Files

- `demo.html` — Standalone showcase page with a responsive 6-card grid
- `style.css` — All styling, morph keyframes, glow effect, and responsive/reduced-motion rules
- `README.md` — This file

## Usage

Open `demo.html` directly in a browser, or copy the `.morph-*` classes and CSS custom properties into your own project.

```html
<article class="morph-card" tabindex="0">
  <div class="morph-card__glow" aria-hidden="true"></div>
  <div class="morph-card__inner">
    <span class="morph-card__index">01</span>
    <h2 class="morph-card__title">Card Title</h2>
    <p class="morph-card__desc">Card description text.</p>
    <span class="morph-card__tag">Tag</span>
  </div>
</article>
```

`tabindex="0"` is included so the morph/glow effect is also reachable and triggerable via keyboard (`:focus-visible`), not just mouse hover.

## Customization (CSS Custom Properties)

All defined on `:root`, scoped to this demo:

| Property | Purpose | Default |
|---|---|---|
| `--morph-bg` | Page background | `#0f1117` |
| `--morph-card-bg` | Card background | `#171a23` |
| `--morph-card-border` | Card border color | `rgba(255,255,255,0.08)` |
| `--morph-text` | Primary text color | `#f2f3f7` |
| `--morph-text-muted` | Secondary text color | `#9aa0ac` |
| `--morph-accent` | Primary glow/gradient color | `#7c5cff` |
| `--morph-accent-2` | Secondary glow/gradient color | `#22d3ee` |
| `--morph-radius-a` / `--morph-radius-b` | The two morph border-radius keyframe states | organic blob values |
| `--morph-radius-rest` | Resting (non-hovered) border radius | `20px` |
| `--morph-speed` | Morph cycle duration | `6s` |
| `--morph-glow-size` | Blur radius of the glow layer | `60px` |

Override any of these on `:root` or a parent selector to reskin the grid without touching the CSS rules themselves.

## Features

- Pure CSS/HTML — no JavaScript, no external frameworks
- Organic `border-radius` morph animation cycling between two blob shapes on hover/focus
- Animated conic-gradient glow using a blurred pseudo-layer, spinning behind the card
- Fully keyboard-accessible: hover effects are mirrored via `:focus-visible` for `tabindex="0"` cards
- Fully responsive: 3-column → 2-column → 1-column grid across desktop, tablet, and mobile
- Respects `prefers-reduced-motion`: disables the morph and glow animations and falls back to a subtle `scale(1.02)` hover with no shape/border-radius change

## Notes on scope

No scope reduction was needed — all requirements in the issue (morph, glow, responsiveness, `prefers-reduced-motion`) are achievable in pure CSS and are implemented as specified.