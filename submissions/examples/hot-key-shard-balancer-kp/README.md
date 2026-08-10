# Hot Key Shard Balancer

An advanced EaseMotion example for monitoring distributed Balancer Rebalancers, shard debt, retry pressure, and Retention margin recovery.

## Features

- Interactive controls for balancer risk, shard debt, retry pressure, and Retention margin health.
- Animated radar, Shard lanes, recovery metrics, Rebalancer timeline, decision matrix, and audit balancer.
- State-driven stable, watch, Balancer, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/Balancer-shard control-radar-kp/README.md submissions/examples/Balancer-shard control-radar-kp/demo.html submissions/examples/Balancer-shard control-radar-kp/style.css
npx stylelint submissions/examples/Balancer-shard control-radar-kp/style.css --allow-empty-input
git diff --check
```
