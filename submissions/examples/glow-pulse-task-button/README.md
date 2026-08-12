# Glow Pulse Task Button

## Overview

A responsive glow pulse button for task management UI. Features pulsing glow animation with two action variants (Active, Pending). Keyboard accessible and respects `prefers-reduced-motion`.

## Usage

```html
<button class="task-btn glow-active">Complete</button>
<button class="task-btn glow-pending">Archive</button>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--glow-pulse-duration` | `2s` | Animation duration |
| `--glow-pulse-scale` | `1.04` | Scale factor on pulse |
| `--glow-color` | Variant | Button border color |
| `--glow-shadow` | Variant | Glow shadow color |

## Action Variants

- `.glow-active` — Purple, primary action (Complete)
- `.glow-pending` — Light purple, secondary action (Archive)

## Features

- Pure HTML + CSS
- Two action variants
- Keyboard accessible
- Responsive button sizing
- GPU-accelerated animations
