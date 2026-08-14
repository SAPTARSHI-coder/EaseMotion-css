# Congestion Collapse Guardian

A control-room style EaseMotion example for protecting busy systems from retry amplification, queue overload, and cascading latency. The screen models a traffic governor that reads live pressure signals, animates queue risk, and switches between absorb, shape, shed, and recover states.

## Features

- Animated congestion radar with rotating pressure sweep
- Queue-depth lanes with adaptive fill and warning pulses
- Load-shedding decision stack with staggered motion
- Retry-amplification meter and cooldown timeline
- Interactive sliders for ingress, retries, latency, and buffer size
- JavaScript-driven status mode that updates CSS variables
- Responsive operations dashboard layout

## Files

- `demo.html` - dashboard markup and control logic
- `style.css` - advanced animation, responsive layout, and visual states

## How to Run

Open `demo.html` in a browser.

## Validation

```bash
npx prettier --check submissions/examples/congestion-collapse-guardian-kp/README.md submissions/examples/congestion-collapse-guardian-kp/demo.html submissions/examples/congestion-collapse-guardian-kp/style.css
npx stylelint submissions/examples/congestion-collapse-guardian-kp/style.css --allow-empty-input
git diff --check
```
