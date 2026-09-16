# Progress Circle

1. What does this do? A circular progress ring that fills from 0 to a target percentage via an animated SVG stroke (stroke-dashoffset), with the percentage shown in the center.
2. How is it used? Build a `.progress-circle` container holding an `.progress-circle__svg` (viewBox 0 0 120 120) with a `.progress-circle__track` circle and a `.progress-circle__value` circle (set its fill via the `--pc-value` custom property, 0-100), plus a `.progress-circle__label`. The value circle's dash offset animates from full circumference (empty) to circumference minus the filled portion. Set `role="progressbar"` and `aria-valuenow` on the container for accessibility. Adjust colors via `--pc-accent` and `--pc-track`.
3. Why is it useful? It renders a determinate circular progress indicator using only CSS (no JavaScript), and shows the final filled ring statically under `prefers-reduced-motion`.
