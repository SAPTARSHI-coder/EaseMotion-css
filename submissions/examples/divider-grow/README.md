# Divider Grow

1. What does this do? A divider line that grows outward from the center, with a label (or dot) in the middle that fades in after the lines finish growing.
2. How is it used? Build a `.divider-grow` flex row with two `.divider-grow__line` gradient bars flanking a `.divider-grow__label` (text) or `.divider-grow__label--dot`. The lines scale from `scaleX(0)` to `scaleX(1)` from center on load, then the label fades in. Adjust the grow speed via `--dg-speed`.
3. Why is it useful? It adds a polished section-divider reveal using only CSS keyframes (no JavaScript), and renders fully static under `prefers-reduced-motion`.
