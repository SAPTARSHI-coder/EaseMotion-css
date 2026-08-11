# CSS Blur-Entrance Navbar for Gaming Hub Layouts

A lightweight, pure CSS/HTML navbar for gaming hub style websites. On load, the
navbar eases in with a blur-to-focus entrance animation — no JavaScript required.

## Files

- `demo.html` — Standalone showcase page with the navbar and sample content
- `style.css` — All styling and animation logic
- `README.md` — This file

## Usage

1. Copy `style.css` into your project (or link it as-is).
2. Copy the `<nav class="gh-navbar">...</nav>` markup from `demo.html` into your page.
3. Link the stylesheet in your `<head>`:
```html
   <link rel="stylesheet" href="style.css">
```
4. Reload the page to see the blur-entrance animation play on the navbar.

## Features

- **Blur-entrance animation** — the navbar fades in, slides down slightly, and
  transitions from blurred to sharp using `filter: blur()` combined with
  `opacity` and `transform`, driven entirely by a single `@keyframes` rule.
- **Pulsing logo accent** — a small glowing dot beside the brand name, animated
  with a subtle infinite pulse.
- **Underline hover/focus indicator** on nav links, expanding from left to right.
- **Fully responsive** — collapses to a wrapped, centered link layout on tablet
  and mobile viewports.
- **Sticky positioning** — the navbar stays pinned to the top of the viewport
  while scrolling.

## Customization

All key values are exposed as CSS custom properties on `:root`:

| Property | Description | Default |
|---|---|---|
| `--gh-bg` | Page background color | `#0d0f14` |
| `--gh-bg-translucent` | Navbar background (translucent) | `rgba(13, 15, 20, 0.85)` |
| `--gh-accent` | Accent color (logo dot, underline, glow) | `#7f5af0` |
| `--gh-accent-glow` | Glow color behind the accent | `rgba(127, 90, 240, 0.55)` |
| `--gh-text` | Primary text color | `#f5f5f7` |
| `--gh-text-muted` | Muted text color (links, paragraphs) | `#a0a3ad` |
| `--gh-navbar-height` | Navbar height on desktop | `72px` |
| `--gh-blur-amount` | Starting blur intensity for the entrance | `14px` |
| `--gh-entrance-duration` | Duration of the entrance animation | `900ms` |
| `--gh-entrance-easing` | Easing curve for the entrance animation | `cubic-bezier(0.22, 1, 0.36, 1)` |

Override any of these in your own stylesheet by redeclaring them on `:root`
after importing `style.css`.

## Accessibility

- Respects `prefers-reduced-motion: reduce` — when set, the entrance animation,
  logo pulse, and link transitions are all disabled and the navbar renders in
  its final visible state immediately.
- Link states are exposed via both `:hover` and `:focus-visible` for keyboard
  navigation support.
- Sufficient color contrast is maintained between text, background, and accent
  colors for readability.

## Notes on scope

This submission is implemented in pure CSS/HTML with no JavaScript, per the
issue's "pure CSS/HTML" requirement. There is no mobile hamburger toggle since
that would require either JS or a checkbox/radio `:checked` hack; instead, the
nav links wrap and center on narrower viewports to remain fully usable without
any interactive toggle.