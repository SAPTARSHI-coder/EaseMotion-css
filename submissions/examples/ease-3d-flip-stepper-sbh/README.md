# ease-3d-flip-stepper

A glassmorphism multi-step progress indicator. Completed steps flip 180° in 3D to reveal a check mark on the back face.

## What does this do?

Adds a **3D-flip stepper**: each step shows a numbered marker. When a step is completed, its marker flips around the Y axis (`rotateY(180deg)`) to show a check mark, and the connecting line to the next step fills with a success gradient. The active step is highlighted with a ring.

## How is it used?

1. Build an ordered list `.stepper` of `.step` items.
2. Mark states with classes: `is-done` (flipped to check), `is-active` (current), or neither (upcoming).
3. Each marker holds a `.step__num` (front) and `.step__check` (back) face.

```html
<link rel="stylesheet" href="style.css" />

<ol class="stepper">
  <li class="step is-done" tabindex="0">
    <span class="step__marker" aria-hidden="true">
      <span class="step__num">1</span>
      <span class="step__check">&#10003;</span>
    </span>
    <span class="step__label">Account</span>
  </li>
  <!-- more steps -->
</ol>
```

A small inline "Replay flip" button re-triggers the flip animation for demo purposes.

## Why is this useful?

- **Animation-first** — the signature motion is a 3D Y-axis flip on the marker using `transform-style: preserve-3d` + `backface-visibility: hidden`; the number face rotates away as the check face rotates in.
- **Glassmorphism aesthetic** — frosted panel via `backdrop-filter: blur()` over a translucent gradient.
- **Accessible** — `aria-current="step"` on the active step, `tabindex` for keyboard focus, `:focus-visible` rings, and full `prefers-reduced-motion` support (flip still swaps faces via transform, no transition duration).
- **Reusable** — configurable via CSS custom properties (`--step-duration`, `--step-ease`, `--marker`, `--glass-blur`, color tokens).

## Files

- `demo.html` — self-contained interactive demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism panel, 3D flip marker, connector lines, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
