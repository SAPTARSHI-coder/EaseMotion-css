# Analytics Dashboard

A dark-themed analytics dashboard with animated stat counters, a chart placeholder, and a recent activity feed. Built with EaseMotion CSS design tokens and utility classes.

## Features

- Animated number counters (ease-out cubic easing)
- 4 stat cards: Users, Revenue, Sessions, Bounce Rate
- Trend indicators (up/down) with custom color tokens
- Bar chart placeholder with gradient bars
- Activity feed with color-coded icons

## Usage

Open `demo.html` in a browser. The counters animate on page load via `requestAnimationFrame`.

## Customization

| CSS Variable        | Default   | Description          |
| ------------------- | --------- | -------------------- |
| `--ease-up-color`   | `#22c55e` | Positive trend color |
| `--ease-down-color` | `#ef4444` | Negative trend color |

Override in `:root` or use `data-theme="dark"` / `data-theme="light"`.

## Tech Stack

- EaseMotion CSS (variables, utilities)
- Vanilla CSS for dashboard-specific layout
- Vanilla JS for counter animation
