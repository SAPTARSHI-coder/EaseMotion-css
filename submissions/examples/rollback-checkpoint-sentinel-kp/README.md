# Rollback Checkpoint Sentinel

An advanced EaseMotion dashboard for visualizing rollback checkpoints in distributed releases. It shows how a sentinel scores deployment drift, chooses a checkpoint, drains risky traffic, and replays safe work after recovery.

## Features

- Interactive controls for drift, error rate, replay queue, and checkpoint freshness
- Animated checkpoint radar, rollback lanes, and recovery playbook cards
- Live JavaScript mode switching across observe, checkpoint, rollback, and replay states
- Responsive operations layout using CSS variables and animation timing
- Advanced-tier contribution with more than 500 added lines

## Files

- `demo.html` - interactive dashboard and state logic
- `style.css` - responsive styling and motion system

## Validation

```bash
npx prettier --check submissions/examples/rollback-checkpoint-sentinel-kp/README.md submissions/examples/rollback-checkpoint-sentinel-kp/demo.html submissions/examples/rollback-checkpoint-sentinel-kp/style.css
npx stylelint submissions/examples/rollback-checkpoint-sentinel-kp/style.css --allow-empty-input
git diff --check
```
