# Adaptive Concurrency Limiter

An advanced EaseMotion example for monitoring distributed Controller Recontrollers, limiter debt, retry pressure, and Retention margin recovery.

## Features

- Interactive controls for controller risk, limiter debt, retry pressure, and Retention margin health.
- Animated radar, Limiter lanes, recovery metrics, Recontroller timeline, decision matrix, and audit controller.
- State-driven stable, watch, Controller, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/Controller-limiter control-radar-kp/README.md submissions/examples/Controller-limiter control-radar-kp/demo.html submissions/examples/Controller-limiter control-radar-kp/style.css
npx stylelint submissions/examples/Controller-limiter control-radar-kp/style.css --allow-empty-input
git diff --check
```
