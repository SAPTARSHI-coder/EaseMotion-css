# Deadletter Replay Console

An advanced EaseMotion example for monitoring distributed Replay Rereplays, replay debt, retry pressure, and Quarantine margin recovery.

## Features

- Interactive controls for poison load, replay debt, retry pressure, and Quarantine margin health.
- Animated radar, Queue lanes, recovery metrics, Rereplay timeline, decision matrix, and audit ledger.
- State-driven stable, watch, Replay, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/Replay-replay control-radar-kp/README.md submissions/examples/Replay-replay control-radar-kp/demo.html submissions/examples/Replay-replay control-radar-kp/style.css
npx stylelint submissions/examples/Replay-replay control-radar-kp/style.css --allow-empty-input
git diff --check
```
