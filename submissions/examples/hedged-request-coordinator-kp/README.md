# Hedged Request Coordinator

An advanced EaseMotion example for monitoring distributed Hedge Rehedges, hedge debt, retry pressure, and Cancel margin recovery.

## Features

- Interactive controls for tail load, hedge debt, retry pressure, and Cancel margin health.
- Animated radar, Request lanes, recovery metrics, Rehedge timeline, decision matrix, and audit ledger.
- State-driven stable, watch, Hedge, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/Hedge-hedge control-radar-kp/README.md submissions/examples/Hedge-hedge control-radar-kp/demo.html submissions/examples/Hedge-hedge control-radar-kp/style.css
npx stylelint submissions/examples/Hedge-hedge control-radar-kp/style.css --allow-empty-input
git diff --check
```
