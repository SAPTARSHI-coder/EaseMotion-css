# Surge Throttle Stabilizer

An advanced EaseMotion dashboard that visualizes a surge-control layer for high-traffic applications. It shows how a throttle stabilizer grades incoming demand, slows noisy paths, protects priority traffic, and restores capacity once queues cool.

## Features

- Interactive sliders for demand, volatility, queue pressure, and priority mix
- Animated surge rings, route lanes, and throttle decision cards
- Live JavaScript mode switching between watch, shape, clamp, and restore states
- Responsive layout for desktop and mobile operations views
- CSS variable driven motion and risk coloring

## Files

- `demo.html` - dashboard markup and control logic
- `style.css` - responsive styling and motion system

## Validation

```bash
npx prettier --check submissions/examples/surge-throttle-stabilizer-kp/README.md submissions/examples/surge-throttle-stabilizer-kp/demo.html submissions/examples/surge-throttle-stabilizer-kp/style.css
npx stylelint submissions/examples/surge-throttle-stabilizer-kp/style.css --allow-empty-input
git diff --check
```
