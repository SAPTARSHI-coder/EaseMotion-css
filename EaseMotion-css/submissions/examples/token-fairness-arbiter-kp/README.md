# Token Fairness Arbiter

An advanced EaseMotion dashboard for visualizing per-tenant token fairness. It shows how an arbiter detects noisy clients, protects reserved capacity, refills buckets, and restores balanced throughput after a fairness window cools.

## Features

- Interactive controls for token demand, noisy share, reserve depth, and refill speed
- Animated fairness radar, tenant lanes, arbitration playbook, and recovery metrics
- Live state switching across balanced, shaping, throttled, and refilling modes
- Responsive operations layout using CSS variables and motion timing
- Advanced-tier contribution with more than 500 added lines

## Files

- `demo.html` - interactive dashboard and state logic
- `style.css` - responsive styling and animation system

## Validation

```bash
npx prettier --check submissions/examples/token-fairness-arbiter-kp/README.md submissions/examples/token-fairness-arbiter-kp/demo.html submissions/examples/token-fairness-arbiter-kp/style.css
npx stylelint submissions/examples/token-fairness-arbiter-kp/style.css --allow-empty-input
git diff --check
```
