# Token Bucket Regulator

An advanced EaseMotion example for monitoring distributed Regulator Reregulators, bucket debt, retry pressure, and Retention margin recovery.

## Features

- Interactive controls for regulator risk, bucket debt, retry pressure, and Retention margin health.
- Animated radar, Bucket lanes, recovery metrics, Reregulator timeline, decision matrix, and audit regulator.
- State-driven stable, watch, Regulator, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/Regulator-bucket control-radar-kp/README.md submissions/examples/Regulator-bucket control-radar-kp/demo.html submissions/examples/Regulator-bucket control-radar-kp/style.css
npx stylelint submissions/examples/Regulator-bucket control-radar-kp/style.css --allow-empty-input
git diff --check
```
