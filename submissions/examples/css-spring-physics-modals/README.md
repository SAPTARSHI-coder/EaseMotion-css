# CSS Spring Physics Modal Component

A high-performance, responsive modal window built using pure CSS transitions tailored for e-commerce or product catalog layouts. It simulates organic spring physics without utilizing JavaScript engine thread dependencies.

## Features
- **Zero JavaScript Overhead**: Relies entirely on the CSS checkbox state manager hack.
- **Parametric Architecture**: Spring duration, easing curves, and scaling limits are configurable via native CSS variables.
- **Accurate Physics Feel**: Built utilizing a customized cubic-bezier sequence optimized for realistic layout damping/overshoot properties.

## Customization Parameters
Modify these values inside `style.css` (`:root`) to calibrate the motion physics:

| Variable | Default Value | Description |
|---|---|---|
| `--spring-duration` | `0.68s` | Time taken to settle completely into state. |
| `--spring-easing` | `cubic-bezier(0.43, 1.65, 0.45, 0.92)` | Custom timing curve handling spring overshoot dynamics. |
| `--modal-scale-start` | `0.75` | Incoming starting scale factor. |
