# Vector Clock Causality Map

An advanced EaseMotion example for monitoring distributed Map Remaps, clock debt, retry pressure, and Retention margin recovery.

## Features

- Interactive controls for map risk, clock debt, retry pressure, and Retention margin health.
- Animated radar, Clock lanes, recovery metrics, Remap timeline, decision matrix, and audit map.
- State-driven stable, watch, Map, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/Map-clock control-radar-kp/README.md submissions/examples/Map-clock control-radar-kp/demo.html submissions/examples/Map-clock control-radar-kp/style.css
npx stylelint submissions/examples/Map-clock control-radar-kp/style.css --allow-empty-input
git diff --check
```
