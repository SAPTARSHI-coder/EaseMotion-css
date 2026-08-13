# Lease Skew Sentinel

An advanced EaseMotion example for visualizing clock skew, lease drift, heartbeat confidence, and fencing risk across a distributed control plane.

## Features

- Interactive controls for leader skew, follower drift, heartbeat loss, and lease margin.
- Animated sentinel dial, heartbeat rails, lease lanes, incident cards, drift matrix, and recovery timeline.
- State-driven modes for stable, watch, fence, and recover states.
- Responsive layout for desktop and mobile dashboards.

## Files

- `demo.html`
- `style.css`

## Validation

```bash
npx prettier --check submissions/examples/lease-skew-sentinel-kp/README.md submissions/examples/lease-skew-sentinel-kp/demo.html submissions/examples/lease-skew-sentinel-kp/style.css
npx stylelint submissions/examples/lease-skew-sentinel-kp/style.css --allow-empty-input
git diff --check
```
