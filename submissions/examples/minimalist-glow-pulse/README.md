# Glow Pulse Animation - Minimalist Tech (Pure CSS)

A pure CSS animated Glow Pulse designed for Minimalist Tech interfaces (e.g., developer tools, dashboards, CLI websites). It utilizes a performant `box-shadow` keyframe to create a sleek, high-tech radar/LED pulse effect.

## Features
- 🔵 **Tech Aesthetic**: Pre-configured with absolute blacks, crisp borders, and a vibrant cyan/blue accent color.
- ♿ **Accessibility First**: Includes native support for the `@media (prefers-reduced-motion: reduce)` query to protect users with vestibular disorders, gracefully falling back to a static state.
- 🕹️ **Versatile Implementation**: Demonstrates two common uses: a continuous "System Status" indicator and a hover-triggered button effect.
- ⚡ **Zero JavaScript**: Completely driven by CSS `@keyframes`.

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--glow-timing` | `2s` | Duration of one complete pulse cycle. |
| `--glow-easing` | `cubic-bezier(...)` | Smooth, modern easing curve. |
| `--accent-base` | `#0070F3` | The core tech color. |
| `--accent-glow` | `rgba(..., 0.6)`| The starting opacity of the glow. |
| `--accent-glow-fade` | `rgba(..., 0)`| The invisible, fully expanded state of the glow. |

## Usage
Simply drop the HTML structure into your project and link the stylesheet. The animation relies on the `ease-glow-pulse` keyframe which can be applied to any element using the `animation` property.