# Elastic-Slide Hero Section — Glassmorphism UI Layouts

A CSS-only hero section that animates content in from opposite sides using an elastic easing curve, with glassmorphism frosted-glass panels.

## Features

- **Elastic slide-in animation** — content slides from the left, visual cards slide from the right, both using a bouncy `cubic-bezier(0.34, 1.56, 0.64, 1)` easing
- **Glassmorphism styling** — semi-transparent panels with `backdrop-filter: blur()` and subtle borders
- **Animated background orbs** — two floating blurred circles for depth
- **Fully responsive** — stacks gracefully on mobile with full-width buttons
- **Reduced-motion accessible** — all animations disabled when `prefers-reduced-motion: reduce` is active

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--esh-bg` | `#080c18` | Page background |
| `--esh-glass` | `rgba(255,255,255,0.07)` | Glass panel fill |
| `--esh-glass-border` | `rgba(255,255,255,0.12)` | Glass border |
| `--esh-glass-blur` | `20px` | Backdrop blur amount |
| `--esh-shadow` | `rgba(0,0,0,0.4)` | Panel drop shadow |
| `--esh-text` | `#e8ecf8` | Primary text |
| `--esh-text-dim` | `rgba(232,236,248,0.55)` | Secondary text |
| `--esh-teal` | `#5eead4` | Primary accent |
| `--esh-violet` | `#a78bfa` | Secondary accent |
| `--esh-pink` | `#f472b6` | Card icon colour |

## How It Works

1. The hero section is a glassmorphism panel using `backdrop-filter: blur(20px)`.
2. Text content slides in from the left via `eshSlideLeft` keyframes.
3. Visual cards slide in from the right via `eshSlideRight` keyframes.
4. Both use `cubic-bezier(0.34, 1.56, 0.64, 1)` for a natural elastic overshoot.
5. Staggered `animation-delay` values on cards create a cascading entrance.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to match your theme.
