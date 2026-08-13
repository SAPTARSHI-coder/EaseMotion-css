# ease-fade-in-stepper

A glassmorphism multi-step progress indicator whose steps fade and lift into view one after another in a staggered cascade.

## What does this do?

Adds a **fade-in stepper**: each step marker and label starts invisible and shifted down, then animates to full opacity and its resting position — with each step delayed slightly more than the previous, creating a cascading reveal. Completed steps fill their marker with a success color and the connector line fills with a gradient. The active step is highlighted with a ring.

## How is it used?

1. Build an ordered list `.stepper` of `.step` items.
2. Assign each step a delay variant (`step--f1` … `step--f4`) to control the fade order.
3. Mark states with classes: `is-done`, `is-active`, or neither.

```html
<link rel="stylesheet" href="style.css" />

<ol class="stepper">
  <li class="step step--f1 is-done" tabindex="0">
    <span class="step__marker" aria-hidden="true">1</span>
    <span class="step__label">Connect</span>
  </li>
  <!-- more steps with --f2, --f3, --f4 -->
</ol>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes fi-step` (opacity + `translateY`) applied per step with an increasing `animation-delay` via `--fi-stagger`, so the stepper reveals as a cascade rather than all at once.
- **Glassmorphism aesthetic** — frosted panel via `backdrop-filter: blur()` over a translucent gradient.
- **Accessible** — `aria-current="step"` on the active step, `tabindex` for keyboard focus, `:focus-visible` rings, and full `prefers-reduced-motion` support (steps appear instantly with no fade/translate).
- **Reusable** — configurable via CSS custom properties (`--fi-duration`, `--fi-ease`, `--fi-stagger`, `--marker`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — glassmorphism panel, fade-in cascade keyframes + stagger, marker/connector states, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
