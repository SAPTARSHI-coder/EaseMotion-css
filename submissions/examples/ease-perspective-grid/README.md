# Perspective Hover Grid

A photo grid where hovering a tile lifts it toward the viewer, while every
other tile simultaneously tilts away into the background — pure CSS 3D
physics, zero JavaScript.

## How it works

- `perspective: 800px` is set once on the grid container so every tile
  shares a single vanishing point.
- Each tile carries a `--tilt` custom property (alternating `-18deg`,
  `0deg`, `18deg` by column) so un-hovered tiles fan outward instead of
  rotating in one flat direction.
- **`.perspective-grid:has(.grid-item:hover)`** — the modern `:has()`
  pseudo-class lets the *container* detect that *some* child is hovered,
  without any JS event listeners.
- Combined with **`.grid-item:not(:hover)`**, this scopes the "tilt away"
  transform to every tile except the one actually being hovered.
- The hovered tile itself gets a simple `translateZ(60px) scale(1.05)`
  lift via a plain `:hover` rule.

```css
.grid-item:hover {
  transform: perspective(800px) rotateY(0deg) translateZ(60px) scale(1.05);
}

.perspective-grid:has(.grid-item:hover) .grid-item:not(:hover) {
  transform: perspective(800px) rotateY(var(--tilt)) translateZ(-40px) scale(0.94);
  filter: brightness(0.55) saturate(0.8);
}
```

## Customizing

- **Tilt angle:** adjust the `--tilt` values on the `nth-child` rules.
- **Lift distance:** change `translateZ(60px)` on `.grid-item:hover`.
- **Grid size:** update `--cols` on `.perspective-grid` (responsive
  breakpoint included for smaller screens).
- **Depth strength:** tweak the `perspective(800px)` value — lower =
  more dramatic 3D distortion.

## Why it fits EaseMotion CSS

Fully declarative, zero JavaScript, and readable class/selector names.
`:has()` + `:not()` replace what would normally require mouseenter/
mouseleave listeners on every sibling — demonstrating how far modern CSS
selectors can go without sacrificing the animation-first philosophy.

## Accessibility

- `prefers-reduced-motion: reduce` disables the 3D tilt/lift and falls
  back to a simple opacity/filter change.
- Decorative images use empty `alt=""`.

## Browser support

Requires `:has()` support (Chrome 105+, Safari 15.4+, Firefox 121+).
A `@supports not selector(:has(a))` fallback provides a basic scale-up
hover for older browsers instead of failing silently.