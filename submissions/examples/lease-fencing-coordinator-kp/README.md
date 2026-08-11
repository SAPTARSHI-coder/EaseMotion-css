# Lease Fencing Coordinator

An advanced EaseMotion example that visualizes leader lease fencing for distributed systems. The dashboard shows how a coordinator detects stale epochs, fences split-brain writers, drains unsafe sessions, and restores leadership after quorum stabilizes.

## Features

- Interactive controls for lease age, quorum confidence, write drift, and replica lag
- Animated epoch rings, fencing beams, writer lanes, and quorum telemetry
- Live mode switching across valid, warning, fenced, and recovered states
- Responsive operations dashboard powered by CSS variables and JavaScript
- Advanced-tier contribution with more than 500 added lines

## Files

- `demo.html` - interactive dashboard and state logic
- `style.css` - animation system and responsive styling

## Validation

```bash
npx prettier --check submissions/examples/lease-fencing-coordinator-kp/README.md submissions/examples/lease-fencing-coordinator-kp/demo.html submissions/examples/lease-fencing-coordinator-kp/style.css
npx stylelint submissions/examples/lease-fencing-coordinator-kp/style.css --allow-empty-input
git diff --check
```
