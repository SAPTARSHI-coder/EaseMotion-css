# Priority Aging Scheduler

An advanced EaseMotion dashboard for visualizing starvation-safe queue scheduling. It shows how a scheduler ages waiting jobs, protects urgent lanes, promotes stale work, and recovers fairness after backlog pressure cools.

## Features

- Interactive controls for urgent load, stale backlog, fairness reserve, and aging speed
- Animated scheduler radar, queue lanes, promotion playbook, and fairness metrics
- Live state switching across balanced, aging, promoted, and recovered modes
- Responsive operations layout using CSS variables and motion timing
- Advanced-tier contribution with more than 500 added lines

## Files

- `demo.html` - interactive dashboard and state logic
- `style.css` - responsive styling and animation system

## Validation

```bash
npx prettier --check submissions/examples/priority-aging-scheduler-kp/README.md submissions/examples/priority-aging-scheduler-kp/demo.html submissions/examples/priority-aging-scheduler-kp/style.css
npx stylelint submissions/examples/priority-aging-scheduler-kp/style.css --allow-empty-input
git diff --check
```
