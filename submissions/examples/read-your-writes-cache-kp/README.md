# Read Your Writes Cache

An advanced EaseMotion example for monitoring distributed Consistency Reconsistencys, cache debt, retry pressure, and Retention margin recovery.

## Features

- Interactive controls for consistency risk, cache debt, retry pressure, and Retention margin health.
- Animated radar, Cache lanes, recovery metrics, Reconsistency timeline, decision matrix, and audit consistency.
- State-driven stable, watch, Consistency, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/Consistency-cache control-radar-kp/README.md submissions/examples/Consistency-cache control-radar-kp/demo.html submissions/examples/Consistency-cache control-radar-kp/style.css
npx stylelint submissions/examples/Consistency-cache control-radar-kp/style.css --allow-empty-input
git diff --check
```
