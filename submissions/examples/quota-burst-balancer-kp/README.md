# Quota Burst Balancer

An advanced EaseMotion example for monitoring distributed Quota Rebalances, quota debt, retry pressure, and Budget floor recovery.

## Features

- Interactive controls for burst load, quota debt, retry pressure, and Budget floor health.
- Animated radar, Quota lanes, recovery metrics, Rebalance timeline, decision matrix, and audit ledger.
- State-driven stable, watch, Balance, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/Quota-quota balancing-radar-kp/README.md submissions/examples/Quota-quota balancing-radar-kp/demo.html submissions/examples/Quota-quota balancing-radar-kp/style.css
npx stylelint submissions/examples/Quota-quota balancing-radar-kp/style.css --allow-empty-input
git diff --check
```
