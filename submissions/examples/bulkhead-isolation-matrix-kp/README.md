# Bulkhead Isolation Matrix

An advanced EaseMotion dashboard for visualizing service bulkheads. It shows how isolated pools protect priority tenants, contain noisy workloads, drain saturated cells, and reopen capacity after blast radius drops.

## Features

- Interactive controls for tenant noise, pool pressure, priority reserve, and blast radius
- Animated isolation matrix, pool lanes, containment playbook, and recovery metrics
- Live state switching across balanced, guarded, isolated, and recovering modes
- Responsive operations layout using CSS variables and animation timing
- Advanced-tier contribution with more than 500 added lines

## Files

- `demo.html` - interactive dashboard and state logic
- `style.css` - responsive styling and animation system

## Validation

```bash
npx prettier --check submissions/examples/bulkhead-isolation-matrix-kp/README.md submissions/examples/bulkhead-isolation-matrix-kp/demo.html submissions/examples/bulkhead-isolation-matrix-kp/style.css
npx stylelint submissions/examples/bulkhead-isolation-matrix-kp/style.css --allow-empty-input
git diff --check
```
