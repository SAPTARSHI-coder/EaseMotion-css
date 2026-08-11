# Session Stickiness Failover

An advanced EaseMotion example for monitoring distributed Failover Refailovers, session debt, retry pressure, and Retention margin recovery.

## Features

- Interactive controls for failover risk, session debt, retry pressure, and Retention margin health.
- Animated radar, Session lanes, recovery metrics, Refailover timeline, decision matrix, and audit failover.
- State-driven stable, watch, Failover, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/Failover-session control-radar-kp/README.md submissions/examples/Failover-session control-radar-kp/demo.html submissions/examples/Failover-session control-radar-kp/style.css
npx stylelint submissions/examples/Failover-session control-radar-kp/style.css --allow-empty-input
git diff --check
```
