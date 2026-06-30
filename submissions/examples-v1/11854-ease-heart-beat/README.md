# Animation: ease-heart-beat

This submission implements the `ease-heart-beat` animation for GSSOC issue **#11854**.

## Description

The `ease-heart-beat` animation simulates a realistic double-beat heart rhythm. It pulses the scale of the element from `1` to `1.1`, back to `1`, then to a stronger `1.15`, and returns to `1`, followed by a brief rest period before repeating. This non-uniform cadence replicates a real heartbeat, making it excellent for notifications, highlight indicators, or favoriting animations (like a heart icon).

## Acceptance Criteria

- Keyframe scaling sequence: `1` → `1.1` → `1` → `1.15` → `1`.
- Fast-fast-pause cadence (non-uniform heartbeat rhythm).
- Customizable `--ease-heartbeat-speed` CSS variable.
- Focus visible indicators and reduced-motion override included.
