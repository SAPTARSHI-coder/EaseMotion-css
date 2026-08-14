# Quorum Latency Arbiter

An advanced EaseMotion example that visualizes how a distributed control plane arbitrates quorum latency during leader pressure, replica lag, and retry storms.

## Features

- Interactive sliders for leader load, replica lag, quorum floor, and retry pressure.
- Animated quorum dial, replica lanes, latency budget cards, event timeline, and arbitration grid.
- State-driven styling for stable, watch, degrade, and recover modes.
- Responsive layout that keeps controls and telemetry readable on narrow screens.

## Files

- `demo.html`
- `style.css`

## Validation

Run:

```bash
npx prettier --check submissions/examples/quorum-latency-arbiter-kp/README.md submissions/examples/quorum-latency-arbiter-kp/demo.html submissions/examples/quorum-latency-arbiter-kp/style.css
npx stylelint submissions/examples/quorum-latency-arbiter-kp/style.css --allow-empty-input
git diff --check
```
