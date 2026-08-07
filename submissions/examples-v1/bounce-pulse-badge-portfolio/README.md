# Bounce-Pulse Badge Component

A lightweight, pure CSS badge module executing an elastic spring bounce entry animation combined with a continuous breathing glow pulse.

## Features
- **Pure CSS/HTML**: Animated using spring keyframe dynamics with zero external JavaScript dependencies.
- **Accessible**: Fully compliant with `prefers-reduced-motion` media queries for user accessibility.
- **Customizable**: Exposes `:root` CSS custom properties to adjust bounce speed, spring easing curves, and breathing pulse timing.

## Customization Parameters
The following CSS custom properties are available in `style.css`:
- `--bounce-duration`: Controls the entry timing of the elastic bounce animation.
- `--bounce-easing`: Spring `cubic-bezier` curve controlling entry recoil dynamics.
- `--pulse-cycle-duration`: Adjusts the speed of the continuous breathing glow pulse.