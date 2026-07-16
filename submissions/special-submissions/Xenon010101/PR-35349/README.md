# ease-button-glow-xk

Glowing neon button with hover intensify and animated border glow.

Resolves: #35125

## Overview

A neon-style button with a continuously rotating conic-gradient border glow
and a soft blurred ambient glow behind it. The glow intensifies on hover/focus,
can be toggled to a persistent "always on" state via click, and includes a
scroll-reveal variant that animates in once the button enters the viewport.

## Markup

```html
<button class="ease-button-glow-xk">Purple Glow</button>
```

Override the color and other properties inline:

```html
<button class="ease-button-glow-xk" style="--ebg-color: #22d3ee;">
  Cyan Glow
</button>
```

## CSS Variables

| Variable       | Default   | Description                                  |
|-----------------|-----------|------------------------------------------------|
| `--ebg-color`  | `#a855f7` | Glow / border color                            |
| `--ebg-radius` | `10px`    | Corner radius of the button (e.g. `999px` for a pill) |
| `--ebg-speed`  | `2.4s`    | Duration of one full rotation of the border glow |

## How the Glow Works

- A rotating `conic-gradient` on `::before` creates the animated border glow
  (`@keyframes ebg-rotate`), masked to a thin ring around the button edge.
- A blurred, low-opacity `::after` sits behind the button for the ambient
  neon bloom.
- On hover/focus, both layers increase in opacity/blur and the box-shadow
  strengthens — this is the "intensify" effect.

## Interactive Triggers (Acceptance Criteria)

Three interaction patterns are demonstrated in `demo.html`:

1. **Hover / focus** — glow intensifies (stronger box-shadow, more opaque
   border ring, wider ambient blur) on `:hover` and `:focus-visible`.
2. **Click** — a dedicated button toggles an `is-active` class that keeps
   the intensified glow on persistently, independent of hover state.
3. **Scroll** — a `--scroll-trigger` variant starts hidden/dim and animates
   into a fully revealed, glowing state once it enters the viewport
   (via `IntersectionObserver`, threshold 0.5).

## Accessibility

- Uses native `<button>` elements throughout — fully keyboard operable by
  default.
- `:focus-visible` shows both an outline and the same intensified glow as
  hover, so keyboard users get equivalent visual feedback.
- Respects `prefers-reduced-motion: reduce` by disabling the rotating
  border animation and simplifying the scroll-reveal transition.

## Files

- `demo.html` — color variants, click-toggle demo, scroll-reveal demo, and
  CSS-variable customization examples (radius, speed).
- `style.css` — component styles, rotating conic-gradient glow, hover/active/
  scroll-revealed states, and reduced-motion handling.
- `README.md` — this file.