# Pure CSS Pulse-Active Tooltip

A zero-dependency, hardware-accelerated dashboard analytics tooltip system built for the EaseMotion interaction library. It applies modern UX states using pure CSS transitions and animations.

## Features

- **Zero JavaScript:** Built entirely using CSS transitions, pseudo-elements, and keyframes.
- **Configurable Architecture:** Customization via scoped CSS variables.
- **Fully Accessible:** Ready for screen readers using `aria-describedby` and keyboard focus triggers (`:focus-within`).
- **Performance Optimized:** Uses `transform` and `opacity` exclusively to bypass layout shifts and repaints.

## Customization API

Modify custom parameters globally via `:root` or inline via attributes to scale animations:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--pulse-duration` | `2s` | Complete lifecycle duration of the ripple layer |
| `--pulse-easing` | `cubic-bezier(...)` | Easing curve for the expansion effect |
| `--pulse-max-scale` | `2.2` | Scaling barrier for the outer rim boundary |
| `--tooltip-transition-speed` | `0.3s` | Drop-down appearance rate |