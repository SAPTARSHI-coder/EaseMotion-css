# Failover Drain Orchestrator

An advanced EaseMotion example for visualizing service failover during zone pressure. The dashboard animates evacuation lanes, health probes, drain queues, and recovery gates while operators tune blast radius and replica health.

## Features

- Interactive controls for zone stress, replica health, drain backlog, and quorum margin
- Animated topology rings, evacuation beams, and drain-lane progress
- Live mode switching across steady, draining, isolated, and restored states
- Responsive control-room layout with CSS variable driven motion
- More than 500 added lines for an advanced contribution tier

## Files

- `demo.html` - interactive dashboard and mode logic
- `style.css` - animation system and responsive visual design

## Validation

```bash
npx prettier --check submissions/examples/failover-drain-orchestrator-kp/README.md submissions/examples/failover-drain-orchestrator-kp/demo.html submissions/examples/failover-drain-orchestrator-kp/style.css
npx stylelint submissions/examples/failover-drain-orchestrator-kp/style.css --allow-empty-input
git diff --check
```
