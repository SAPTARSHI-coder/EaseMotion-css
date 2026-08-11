# CSS 3D Perspective Tilt Tabs

A pure CSS tabs component styled as a portfolio case-study browser, where each panel rotates in on a 3D plane rather than a flat fade or slide. No JavaScript, no dependencies.

## How it works

Tab switching uses the same radio-hack pattern as other tabs in this framework. What's different is the transition: `perspective` is set on the parent `.ease-tabs-scene` container, which establishes how far away the viewer's "eye" is from the 3D plane — a smaller value gives a more dramatic, fish-eye-like tilt, a larger value gives a subtler one.

Each `.ease-tabs-panel` itself starts rotated with `rotateY(14deg)` and slightly scaled down, then animates to `rotateY(0deg)` at full scale when its radio is checked, so it looks like it's rotating into place on a hinge rather than simply appearing. `transform-style: preserve-3d` is set so the panel's own 3D transform is respected within its parent's perspective context.

As a bonus, hovering the active panel adds a very subtle independent `rotateX` tilt, layered on top of the resting `rotateY(0deg)` state, for a bit of life without being distracting.

## Files

- `demo.html` – a 3-tab portfolio case study browser (Nova, Orbit, Fable)
- `style.css` – all styling, custom properties, and the 3D tilt transition
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-tilt-duration` – 0.45s
- `--ease-tilt-easing` – cubic-bezier(0.34, 1.56, 0.64, 1) (slight overshoot for a tactile feel)
- `--ease-tilt-radius` – 12px
- `--ease-tilt-perspective` – 900px (lower = more dramatic tilt, higher = subtler)
- `--ease-tilt-angle` – 14deg (how far the panel is rotated before becoming active)
- `--ease-tilt-bg` – panel background
- `--ease-tilt-border` – border color
- `--ease-tilt-text` – active tab / panel title color
- `--ease-tilt-muted-text` – inactive tab / body text color
- `--ease-tilt-accent` – active tab border color

Example override:

```css
:root {
  --ease-tilt-perspective: 600px;
  --ease-tilt-angle: 22deg;
}
```

## Notes

- `perspective` must live on the parent container, not the panel itself, or the 3D effect won't apply correctly — this is a common gotcha with CSS 3D transforms
- Fully responsive, with breakpoints at 768px and 480px, and taller scene height on mobile since panel text wraps more
- Radio/label pairing keeps tabs keyboard-navigable by default
- Respects `prefers-reduced-motion` — all transform and transition is disabled, panels simply fade via opacity with no rotation