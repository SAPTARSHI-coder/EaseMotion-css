# Interactive Password Strength Indicator

## What it does

A self-contained **Password Strength Indicator** featuring:

- **Interactive Checklist**: Dynamic status checks for password complexity requirements (length, uppercase, lowercase, numbers, and symbols) that update in real-time as the user types.
- **Animated Strength Meter**: Smoothly expanding and color-shifting progress bar indicating Weak, Fair, Good, and Strong states.
- **Visibility Toggle**: Interactive show/hide toggle for password visibility with micro-interaction feedbacks.

## Why it fits EaseMotion CSS

- Uses custom EaseMotion-style curves (`cubic-bezier(0.2, 0.8, 0.2, 1)` and `cubic-bezier(0.34, 1.56, 0.64, 1)`) for organic, bouncy transitions.
- Zero external dependencies or CSS frameworks.
- Rich micro-animations (springy checklist checks, card hover depth, active press states, button shine sweep).
- Full compatibility with `prefers-reduced-motion` media queries for accessibility.

## Folder structure

`submission/examples/password-strength-indicator/`

- `demo.html`
- `style.css`
- `README.md`
