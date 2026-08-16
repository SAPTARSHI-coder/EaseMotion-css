# Badge Pulse

1. What does this do? A status badge with a pulsing dot to signal a live state (online), with calm away and offline variants that do not pulse.
2. How is it used? Build a `.badge-pulse` pill with a `.badge-pulse__dot`; the dot's `::before` ring expands and fades on a loop. Use modifiers `--online` (pulses, green), `--away` (static, amber), `--offline` (static, slate). Adjust the accent and tint via `--bp-accent` and `--bp-tint`.
3. Why is it useful? It communicates liveness at a glance using only CSS keyframes (no JavaScript), and the pulse is disabled for non-live states and under `prefers-reduced-motion`.
