# Floating Orbit Popover

A pure-CSS animated Popover utilizing a smooth, organic orbital floating path, designed to match modern checkout templates for E-Commerce web interfaces[cite: 1].

## Features

- **No JS Overhead:** Relies entirely on native HTML/CSS selectors (`:hover`, `:focus-within`, `@keyframes`)[cite: 1].
- **Smooth Orbital Path:** Combines asynchronous 2D transitions & slight scaling to mock a 3D float depth loop[cite: 1].
- **Deeply Accessible:** Full keyboard visibility support and gracefully respects the `prefers-reduced-motion` media query[cite: 1].
- **Configurable:** Driven by CSS custom properties for effortless tailoring[cite: 1].

## Configuration (CSS Custom Properties)

Overwrite these variables on `:root` or container-specific scopes to tune physical dimensions or animation kinetics[cite: 1]:

| CSS Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--orbit-duration` | `6s` | Duration of the complete 3D-orbital path loop[cite: 1]. |
| `--orbit-easing` | `cubic-bezier(...)` | Custom physics curve for natural easing[cite: 1]. |
| `--orbit-scale-start` | `1` | Scaling factor at the lowest/closest points of orbit[cite: 1]. |
| `--orbit-scale-mid` | `1.06` | Scaling peak factor during the apex swing[cite: 1]. |