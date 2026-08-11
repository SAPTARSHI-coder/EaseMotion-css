# CSS Scale-Hover Card Grid for Gaming Hub Layouts

A lightweight, pure CSS/HTML card grid for gaming hub style websites. Cards
smoothly scale up on hover and keyboard focus using GPU-friendly CSS transforms —
no JavaScript required.

## Files

- `demo.html` — Standalone showcase page with six gaming-themed cards
- `style.css` — All styling, grid layout, and animation logic
- `README.md` — This file

## Features

- **Scale-on-hover animation** — cards lift with a smooth `transform: scale()`
  transition, triggered by both `:hover` and `:focus-visible` states.
- **GPU-friendly performance** — uses `transform` and `will-change` for
  composited animations that run at 60 fps without triggering layout or paint.
- **Glowing accent border** — on hover, cards gain a soft accent-colored glow
  via `box-shadow` and `border-color` transitions.
- **Responsive CSS Grid** — adapts from 3 columns on desktop, to 2 on tablet,
  to 1 on mobile, with no media-query JavaScript.
- **Gaming-themed design** — dark color scheme, gradient card banners, genre
  badges, star ratings, and a pulsing logo accent.
- **Semantic HTML5** — uses `<article>`, `<section>`, `<header>`, and `<main>`
  for meaningful document structure.

## Usage

1. Copy `style.css` into your project (or link it as-is).
2. Copy the `<section class="gh-grid-ag">...</section>` markup from `demo.html`
   into your page.
3. Link the stylesheet in your `<head>`:
```html
   <link rel="stylesheet" href="style.css">
```
4. Hover or Tab-focus any card to see the scale animation.

## CSS Custom Properties

All key values are exposed as CSS custom properties on `:root`:

| Property | Description | Default |
|---|---|---|
| `--gh-bg-ag` | Page background color | `#0d0f14` |
| `--gh-surface-ag` | Card surface color | `#161a24` |
| `--gh-surface-hover-ag` | Card surface on hover | `#1c2130` |
| `--gh-accent-ag` | Primary accent color (borders, glow) | `#7f5af0` |
| `--gh-accent-glow-ag` | Glow color for accent elements | `rgba(127, 90, 240, 0.45)` |
| `--gh-accent-alt-ag` | Secondary accent for "hot" badges | `#e04cf0` |
| `--gh-text-ag` | Primary text color | `#f5f5f7` |
| `--gh-text-muted-ag` | Muted text color | `#a0a3ad` |
| `--gh-grid-gap-ag` | Gap between grid cards | `24px` |
| `--gh-radius-ag` | Card border radius | `14px` |
| `--gh-hover-duration-ag` | Duration of scale transition | `0.3s` |
| `--gh-hover-easing-ag` | Easing curve for the scale transition | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--gh-hover-scale-ag` | Scale factor on hover/focus | `1.045` |
| `--gh-banner-height-ag` | Height of card banner area | `180px` |

Override any of these in your own stylesheet by redeclaring them on `:root`
after importing `style.css`.

## Accessibility

- Respects `prefers-reduced-motion: reduce` — when set, all scale transitions
  and the logo pulse animation are disabled; cards render in their static state.
- Cards are focusable via keyboard (`tabindex="0"`) with a visible
  `:focus-visible` outline ring, ensuring the scale effect is accessible to
  non-mouse users.
- Sufficient color contrast is maintained between text, backgrounds, and accent
  colors for readability.
- Card banners use `role="img"` with `aria-label` for screen reader
  descriptions.

## Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge | 90+ |
| Firefox | 90+ |
| Safari | 15+ |
| Mobile Chrome / Safari | Full support |

The component relies on `transform`, `transition`, `will-change`, CSS Grid,
`backdrop-filter`, and `focus-visible` — all widely supported in modern
browsers.
