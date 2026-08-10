# Saga Compensation Radar

An advanced EaseMotion example for monitoring distributed saga rollbacks, compensation debt, retry pressure, and checkpoint recovery.

## Features

- Interactive controls for failed steps, compensation debt, retry pressure, and checkpoint health.
- Animated radar, saga lanes, recovery metrics, rollback timeline, decision matrix, and audit ledger.
- State-driven stable, watch, compensate, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/saga-compensation-radar-kp/README.md submissions/examples/saga-compensation-radar-kp/demo.html submissions/examples/saga-compensation-radar-kp/style.css
npx stylelint submissions/examples/saga-compensation-radar-kp/style.css --allow-empty-input
git diff --check
```
