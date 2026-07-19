# Interactive 3D Tilt Hover Effect with Dynamic Glare

A reusable hover utility that tilts an element in 3D based on cursor position
while a soft light glare tracks the pointer — a "glass card" premium feel.

## Files
- `demo.html` — working demo with inline cursor-tracking script
- `style.css` — all styling and CSS variables (pure CSS, no JS required for the visuals themselves)

## Usage

```html
<div class="tilt-card-tay" tabindex="0">
  <div class="tilt-glare-tay"></div>
  <div class="tilt-content-tay">
    <h2>Your Title</h2>
    <p>Your text</p>
  </div>
</div>
```

Include `style.css`, then add the small pointermove script from `demo.html`
(or your own JS) to update `--rx-tay`, `--ry-tay`, `--gx-tay`, `--gy-tay`
on hover.

## Customization (CSS variables)

| Variable | Default | Purpose |
|---|---|---|
| `--tilt-max-tay` | `12deg` | Max rotation on either axis |
| `--glare-opacity-tay` | `0.5` | Strength of the glare highlight |
| `--perspective-tay` | `1000px` | 3D depth of the tilt |
| `--tilt-speed-tay` | `0.15s` | Transition speed in/out of hover |

## Accessibility
- Keyboard users can `Tab` to the card; `:focus-visible` shows an outline
  and reveals the glare, so the effect isn't mouse-only.
- Respects `prefers-reduced-motion: reduce` — tilt and glare are fully
  disabled for users who've opted out of motion effects.

## Behavior
- Desktop with a fine pointer: full tilt + glare tracking via `pointermove`/`pointerleave`.
- Touch devices / coarse pointers: effect is disabled entirely via
  `@media (hover: none), (pointer: coarse)` — no tilt, no glare, normal card.

## Dependency-free
No external libraries. ~30 lines of vanilla JS purely for reading cursor
position; all visuals are CSS-driven (transform + radial-gradient).