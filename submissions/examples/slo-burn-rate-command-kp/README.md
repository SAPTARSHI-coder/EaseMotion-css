# SLO Burn Rate Command

An advanced EaseMotion dashboard for visualizing multi-window SLO burn rate response. It animates burn velocity, alert lanes, mitigation cards, and recovery gates while operators tune error rate, request volume, latency, and remaining budget.

## Features

- Interactive controls for error rate, traffic, latency, and budget remaining
- Animated burn radar, SLO lanes, alert timeline, and mitigation playbook
- Live state switching across stable, watching, paging, and recovering modes
- Responsive operations layout using CSS variables and motion timing
- Advanced-tier contribution with more than 500 added lines

## Files

- `demo.html` - interactive dashboard and state logic
- `style.css` - responsive styling and animation system

## Validation

```bash
npx prettier --check submissions/examples/slo-burn-rate-command-kp/README.md submissions/examples/slo-burn-rate-command-kp/demo.html submissions/examples/slo-burn-rate-command-kp/style.css
npx stylelint submissions/examples/slo-burn-rate-command-kp/style.css --allow-empty-input
git diff --check
```
