# Spring Easing Timing Functions

## What does this do?

Demonstrates physics-based spring easing curves for use in the EaseMotion CSS framework. Spring curves create natural, tactile animations that feel responsive and premium — essential for modern UI.

## How is it used?

Import the spring easing curves into your project:

```css
/* Spring timing functions — use as transition-timing-function or animation-timing-function */
.my-element {
  transition-timing-function: var(--ease-spring-underdamped);
  /* cubic-bezier(0.34, 1.56, 0.64, 1) — bouncy overshoot */
}
```

### Available Spring Curves

| Token                      | Curve                        | Feel                   |
|----------------------------|------------------------------|------------------------|
| `--ease-spring-underdamped` | `cubic-bezier(0.34,1.56,0.64,1)` | Bouncy, overshoots     |
| `--ease-spring-critical`    | `cubic-bezier(0.22,1,0.36,1)`   | Smoothest, no overshoot |
| `--ease-spring-overdamped`  | `cubic-bezier(0.68,-0.2,0.27,1.1)` | Heavy, no overshoot |
| `--ease-spring-soft`        | `cubic-bezier(0.13,0.99,0.54,0.93)` | Gentle, soft landing |
| `--ease-spring-snappy`      | `cubic-bezier(0.5,1.5,0.75,1.25)`   | Fast snap             |

## Why is it useful?

- Physics-based curves feel more natural than standard ease-in-out
- Underdamped spring: great for celebratory/feedback animations
- Critically damped: ideal for UI transitions (buttons, menus, modals)
- Overdamped: appropriate for heavy or deliberate transitions
- Fully CSS-native — no JavaScript required for the timing function

## Browser Support

All `cubic-bezier` curves are supported in all modern browsers. No polyfill needed for `transition-timing-function`. For `animation-timing-function` on older browsers, a polyfill exists but is rarely needed in 2024+.

## Tech Stack

Pure HTML + CSS. No JavaScript dependencies.
