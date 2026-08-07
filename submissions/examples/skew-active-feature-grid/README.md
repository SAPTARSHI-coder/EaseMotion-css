# Skew-Active Feature Grid

A pure CSS/HTML product grid for catalog layouts. Cards rest at a gentle,
alternating lean — like items arranged on a shelf — and straighten forward
on hover, keyboard focus, or tap. No JavaScript, no build step.

**Files**
- `demo.html` — standalone showcase page (6-product grid)
- `style.css` — the component styles
- `README.md` — this document

## How it works

Each card is two nested elements:

```html
<article class="em-feature-card" tabindex="0">
  <div class="em-feature-card__inner">
    ...card content...
  </div>
</article>
```

- `.em-feature-card` (the outer shell) is skewed with `skewX(var(--em-card-tilt))`.
- `.em-feature-card__inner` (the content) is skewed by the exact inverse,
  `skewX(calc(var(--em-card-tilt) * -1))`, so the copy inside always reads
  upright even though the card outline leans.

Both skews read from the same `--em-card-tilt` custom property, which is
set per-card via `:nth-child` for a hand-arranged look, and reset to `0deg`
on `:hover` / `:focus` / `:focus-within`. Because both elements reference
the same variable, a single `transition: transform` keeps the outline and
the content perfectly in sync as the card straightens and lifts forward.

No JavaScript is used anywhere — activation is driven entirely by `:hover`,
`:focus`, and `:focus-within`, so the effect works identically with a mouse,
a keyboard, or a touchscreen (tap-and-hold / tap-to-focus).

## Usage

1. Copy the CSS custom properties block and the `.em-catalog`, `.em-feature-grid`,
   and `.em-feature-card*` rules from `style.css` into your project (or link
   the file directly).
2. Repeat the card markup from `demo.html` for each product. Any number of
   cards works — the grid reflows with `auto-fit`, and the lean pattern
   repeats every 6 cards via `nth-child(6n+…)`.
3. Swap in your own fonts, copy, and accent colors using the custom
   properties below.

```html
<section class="em-feature-grid" aria-label="Featured products">
  <article class="em-feature-card" tabindex="0">
    <div class="em-feature-card__inner">
      <div class="em-feature-card__stamp em-feature-card__stamp--gold"><span>BC</span></div>
      <p class="em-feature-card__ticket">No. 01</p>
      <p class="em-feature-card__category">Navigation</p>
      <h2 class="em-feature-card__name">Brass Field Compass</h2>
      <p class="em-feature-card__desc">Liquid-filled housing, sighting mirror.</p>
      <p class="em-feature-card__price">$68<span>.00</span></p>
    </div>
  </article>
  <!-- more .em-feature-card items -->
</section>
```

## CSS Custom Properties

All tunable values live on `:root`, so re-skinning the component never
requires touching a selector.

| Property | Default | Purpose |
|---|---|---|
| `--em-ink` | `#16302B` | Primary text / page background ink |
| `--em-paper` | `#F4F0E4` | Card face at rest |
| `--em-paper-active` | `#FFFDF7` | Card face when activated |
| `--em-line` | `#D8CDB0` | Hairline borders and dividers |
| `--em-muted` | `#6B6553` | Secondary text on the card |
| `--em-accent-gold` / `--em-accent-sage` / `--em-accent-rose` | — | Stamp badge accent colors, cycled across cards |
| `--em-font-display` | `"Zilla Slab"` | Headings and price |
| `--em-font-body` | `"Space Grotesk"` | Body copy |
| `--em-font-mono` | `"IBM Plex Mono"` | Eyebrow, category, ticket, and stamp text |
| `--em-grid-gap` | `clamp(1.5rem, 3vw, 3rem)` | Gap between grid cells |
| `--em-grid-max-width` | `1180px` | Max width of the catalog container |
| `--em-card-radius` | `3px` | Corner radius on cards |
| `--em-card-lean` | `7deg` | Base tilt magnitude at rest (mirrored/scaled per card) |
| `--em-card-lift` | `-14px` | How far a card rises when activated |
| `--em-card-scale` | `1.035` | How much a card grows when activated |
| `--em-transition-speed` | `0.5s` | Duration for the skew/lift/scale transition |
| `--em-transition-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Easing curve for all card motion |

The per-card resting angle itself (`--em-card-tilt`) is set by the
`nth-child(6n+…)` rules in `style.css`, not on `:root` — adjust those
selectors directly if you want a different lean pattern.

## Features

- **Pure CSS / HTML.** No JavaScript, no dependencies, no build step.
- **Skew-active interaction.** Cards lean at rest and straighten toward the
  viewer on hover or focus, simulating pulling an item off a shelf.
- **Content stays legible at all times** via the counter-skew technique —
  text is never rendered at an angle.
- **Staggered entrance animation** on page load (`@keyframes em-shelf-in`),
  respecting the same easing and per-card timing as the interaction states.
- **Fully responsive.** The grid reflows with `auto-fit`/`minmax`, and the
  lean/lift amounts scale down on tablet and collapse to a flat single
  column with a subtle lean on mobile, where hover isn't reliable.
- **Keyboard accessible.** Every card is a `tabindex="0"` element and
  activates identically on `:focus` / `:focus-within` as it does on
  `:hover`, with a visible `:focus-visible` state.
- **`prefers-reduced-motion` support.** When reduced motion is requested,
  all cards render flat (`--em-card-tilt: 0deg`), transform transitions and
  the entrance animation are removed, and only a fast box-shadow fade is
  kept for state feedback.

## Browser support

Uses CSS custom properties, `clamp()`, `:focus-within`, and `:focus-visible`.
Supported in all current evergreen browsers (Chrome, Firefox, Safari, Edge).