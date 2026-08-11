# Expanded Entrance Animations — EaseMotion CSS

**Issue:** [#22094 — Expand entrance animations with bounce, roll, light-speed, and elastic variants](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22094)

Adds 16 new entrance animation classes: bounce, roll, light-speed, elastic, and rotate variants — with utility classes for timing and delay control.

## Structure

```
submissions/core_changes-issue-22094/
├── demo.html       # Interactive demo with click-to-replay cards
├── style.css       # All animation keyframes and classes
└── README.md       # This file
```

## Animation Classes

| Category | Classes |
|----------|---------|
| **Bounce** | `ease-bounce-in`, `ease-bounce-in-down`, `ease-bounce-in-up`, `ease-bounce-in-left`, `ease-bounce-in-right` |
| **Roll** | `ease-roll-in`, `ease-roll-in-left`, `ease-roll-in-right` |
| **Light-Speed** | `ease-light-speed-in`, `ease-light-speed-in-left`, `ease-light-speed-in-right` |
| **Elastic** | `ease-elastic-in`, `ease-elastic-out` |
| **Rotate** | `ease-rotate-in`, `ease-rotate-in-down-left`, `ease-rotate-in-down-right` |

## Utility Classes

| Class | Description |
|-------|-------------|
| `.ease-animated` | Sets default 0.6s duration and fill-mode |
| `.ease-animated-fast` | 0.3s duration |
| `.ease-animated-slow` | 1s duration |
| `.ease-animated-delay-1` through `-5` | 0.1s to 0.5s delay |
| `.ease-animated-infinite` | Infinite loop |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />

<h1 class="ease-animated ease-bounce-in">Hello World</h1>

<div class="ease-animated ease-light-speed-in ease-animated-delay-2">Staggered</div>
```

## Features

- 16 new keyframe animations in `@layer easemotion-animations`
- Timing utility classes for duration and delay control
- `prefers-reduced-motion` disables all animations
- Compatible with existing EaseMotion animation classes
