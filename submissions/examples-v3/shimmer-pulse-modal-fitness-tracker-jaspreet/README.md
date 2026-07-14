# Shimmer Pulse Modal Component (Fitness Tracker Layouts)

A responsive CSS-only modal designed for fitness dashboards with shimmer and pulse animations.

## Features

- **Zero JavaScript Overhead**: Relies entirely on semantic CSS checkbox selectors (`:checked`) to toggle view visibility and animation states safely.
- **Configurable Variables**: Exposes timeline, spacing, and scaling hooks through clear, standardized top-level CSS variables.
- **Shimmer & Pulse Effects**: Combines linear reflection sweeps with smooth container border breathing animations.
- **Mobile Responsive**: Fully adaptive responsive scaling transforms complex breakdown matrix blocks effortlessly across smaller displays.

## Configurable Properties

Tweak these native variables directly in the stylesheet to update layouts instantly:

| Variable | Default | Purpose |
| :--- | :--- | :--- |
| `--em-modal-scale` | `0.94` | Starting scale size before opening. |
| `--em-modal-radius` | `24px` | Border radius of the layout card container. |
| `--em-shimmer-speed` | `2.8s` | Time duration for the linear shimmer reflection sweep. |
| `--em-pulse-speed` | `4s` | Structural cycle velocity for the soft border pulse loop. |
| `--em-transition-easing` | `cubic-bezier(...)` | Universal easing curve definition. |

## Quick Start Usage

1. Add `demo.html` and `style.css` together into your target execution environment workspace.
2. Open `demo.html` inside any standard application browser window.
3. Click or trigger focus onto the **View Insights** element card wrapper to launch the active state overlay.