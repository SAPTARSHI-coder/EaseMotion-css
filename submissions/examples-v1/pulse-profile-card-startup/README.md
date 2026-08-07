# Pulse Profile Card - Startup Aesthetic (Pure CSS)

A modern, highly-polished Profile Card component heavily inspired by SaaS and Startup design systems. It features a performant, pure CSS animated "Pulse" ring behind the user's avatar to signify live/online status or simply draw attention without relying on heavy JavaScript loops.

## Features
- 🔵 **GPU-Accelerated Pulse**: Uses `transform: scale()` and `opacity` on a pseudo-element rather than `box-shadow` or `width`/`height` to ensure 60fps animations without layout thrashing.
- 🏢 **Startup Aesthetic**: Pre-configured with crisp Inter typography, subtle hover lifts, and clean utility borders.
- ♿ **Accessibility First**: Implements `prefers-reduced-motion` to stop the infinite animation and degrade gracefully to a static colored halo for users with vestibular sensitivities.
- ⚡ **Zero JavaScript**: Runs entirely on CSS `@keyframes`.

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--pulse-duration` | `2s` | The time it takes for one complete ring expansion and fade. |
| `--pulse-easing` | `cubic-bezier(...)` | Creates a snappy start that fades out smoothly. |
| `--pulse-color` | `#3B82F6` | The color of the breathing aura. |

## Usage
Simply drop the HTML structure into your project and link the stylesheet. To attach the pulse effect to any circular avatar, wrap the `<img>` tag in a div with the `.ease-pulse-avatar` class.