# Crystallize Progress Bar

A premium progress bar component for the **EaseMotion CSS** library, animated entirely in pure CSS. Inspired by crystal-energy aesthetics found in modern SaaS dashboards, Apple-style glassmorphism, and Linear / Stripe design systems.

---

## Overview

The Crystallize Progress Bar replaces a plain loading indicator with a living, light-refracting fill. As the bar expands, a diagonal crystal reflection sweeps across it, a glossy top highlight adds depth, and a leading-edge sparkle marks the tip. On completion, a soft aurora glow pulses around the track — then the whole sequence loops seamlessly.

---

## Features

- **Zero JavaScript** — fully driven by CSS `@keyframes` and custom properties
- **EaseMotion token-aligned** — uses `--ease-*` naming for colors, radii, spacing, and easing
- **Four percentage variants** — 25 %, 50 %, 75 %, 100 % with staggered start offsets
- **Two size modifiers** — `--sm` (8 px) and `--lg` (20 px) in addition to the default 14 px
- **Three-layer crystal effect** via CSS pseudo-elements:
  - Sweeping diagonal shimmer (`::before`)
  - Glossy top highlight (`::after`)
  - Leading-edge sparkle (inline `<span>`)
- **Fully accessible** — `role="progressbar"`, `aria-valuemin/max/now`
- **Reduced-motion safe** — animations freeze; bars snap to their target width with a static glow
- **Responsive** — fluid `width: 100%` layout adapts from mobile to wide desktop

---

## File Structure

```
crystallize-progress-bar-apoorva/
├── demo.html   ← standalone demo, open directly in a browser
├── style.css   ← component styles (no build step required)
└── README.md
```

---

## Usage

```html
<!-- 1. Link EaseMotion CSS and the component stylesheet -->
<link rel="stylesheet" href="path/to/easemotion.css" />
<link rel="stylesheet" href="path/to/style.css" />

<!-- 2. Drop in the markup -->
<div class="ease-progress--75">
  <div
    class="ease-progress-track"
    role="progressbar"
    aria-label="Profile completion"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="75"
  >
    <div class="ease-progress-fill">
      <span class="ease-progress-edge" aria-hidden="true"></span>
    </div>
  </div>
</div>
```

Available percentage modifier classes:

| Class                 | Fill target |
| --------------------- | ----------- |
| `.ease-progress--25`  | 25 %        |
| `.ease-progress--50`  | 50 %        |
| `.ease-progress--75`  | 75 %        |
| `.ease-progress--100` | 100 %       |

Size modifier classes (applied to the track element):

| Class                      | Track height    |
| -------------------------- | --------------- |
| `.ease-progress-track--sm` | 8 px            |
| _(none)_                   | 14 px (default) |
| `.ease-progress-track--lg` | 20 px           |

---

## Customization

Override any CSS custom property on a wrapper element to restyle without touching the source:

```css
/* Example: teal-to-pink variant, slower animation */
.my-custom-bar {
  --crystal-fill-gradient: linear-gradient(90deg, #0d9488, #ec4899);
  --crystal-glow-color: rgba(236, 72, 153, 0.5);
  --crystal-duration: 8s;
  --crystal-track-h: 18px;
}
```

Key tokens:

| Custom property           | Default                       | Purpose                                |
| ------------------------- | ----------------------------- | -------------------------------------- |
| `--crystal-fill-gradient` | blue → cyan → purple gradient | Fill color                             |
| `--crystal-glow-color`    | `rgba(59,130,246,0.55)`       | Glow halo color                        |
| `--crystal-duration`      | `5s`                          | Full animation cycle length            |
| `--crystal-ease`          | `cubic-bezier(0.45,0,0.55,1)` | Fill easing function                   |
| `--crystal-track-h`       | `14px`                        | Track height                           |
| `--fill-target`           | `100%`                        | Fill end-point (set by modifier class) |

---

## Accessibility

- All tracks carry `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`.
- The decorative `<span class="ease-progress-edge">` is marked `aria-hidden="true"`.
- Under `prefers-reduced-motion: reduce`:
  - All animations are disabled.
  - Each bar remains at its target width with a subtle static glow so reduced-motion users still see a visually rich component.

---

## Responsive Design

The progress track is `width: 100%` inside a `min(100%, 52rem)` page shell. No fixed pixel widths are used for the component itself, so it adapts naturally from 320 px mobile screens to wide desktops. A `max-width: 640px` breakpoint reduces padding on the demo card.

---

## Animation Details

The animation cycle (default 5 s, looping infinitely):

| Time slice | What happens                                                                                               |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| 0 – 5 %    | Track and fill fade in from nothing                                                                        |
| 5 – 80 %   | Fill expands left → right; shimmer sweeps diagonally; edge sparkle is visible                              |
| 80 – 94 %  | Fill is at `--fill-target`; a second fast shimmer pass simulates the "completion pulse"; track glow blooms |
| 94 – 100 % | Everything resets to 0 for the next loop                                                                   |

The four bars are staggered at `0 s`, `-1.25 s`, `-2.5 s`, `-3.75 s` offsets so they animate at different phases simultaneously, producing a natural waterfall cadence on the demo page.

---

## Browser Compatibility

| Browser        | Support                                      |
| -------------- | -------------------------------------------- |
| Chrome 90+     | ✅ Full                                      |
| Firefox 89+    | ✅ Full                                      |
| Safari 15+     | ✅ Full (`-webkit-backdrop-filter` included) |
| Edge 90+       | ✅ Full                                      |
| iOS Safari 15+ | ✅ Full                                      |

No polyfills are required. The component degrades cleanly in older browsers: the fill stays visible (plain gradient, no shimmer) and the track remains styled.

---

## Why It Fits EaseMotion CSS

- Follows the `ease-*` class and token naming convention used across the framework
- Uses `--ease-color-*`, `--ease-radius-*`, `--ease-space-*`, and `--ease-speed-*` design tokens verbatim
- Respects `prefers-reduced-motion` — the same accessibility contract the core framework enforces
- Pure HTML + CSS — no build step, no dependencies, no JavaScript — consistent with every other example in `submissions/examples/`
- The component is self-contained: copy the two files and import; nothing else needed

---

## License

MIT — same as the EaseMotion CSS repository.

---

## Example: full markup with label + value

```html
<div class="progress-example ease-progress--50">
  <div class="progress-meta">
    <span class="progress-label">Deployment Progress</span>
    <span class="progress-value">50%</span>
  </div>
  <div
    class="ease-progress-track"
    role="progressbar"
    aria-label="Deployment progress"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="50"
  >
    <div class="ease-progress-fill">
      <span class="ease-progress-edge" aria-hidden="true"></span>
    </div>
  </div>
</div>
```

## Example: CSS customization

```css
/* Rose-gold variant on a specific page section */
.my-section .ease-progress--75 {
  --crystal-fill-gradient: linear-gradient(90deg, #be185d, #f43f5e, #fb923c);
  --crystal-glow-color: rgba(244, 63, 94, 0.5);
}
```
