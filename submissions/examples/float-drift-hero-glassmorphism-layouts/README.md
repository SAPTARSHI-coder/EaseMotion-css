# Float-Drift Hero Section — Glassmorphism UI Layouts

A CSS-only hero section where background shapes gently drift across the viewport behind a frosted-glass content panel.

## Features

- **Floating shapes** — four blurred circles drift independently with `fdDrift1/2/3` keyframes at different speeds and directions
- **Glassmorphism panel** — semi-transparent card with `backdrop-filter: blur(24px)` and subtle border
- **Gradient text heading** — multi-stop gradient on the main title for visual depth
- **Fade-up entrance** — content animates in from below on page load
- **Fully responsive** — adapts to mobile viewports with reduced blur and opacity
- **Reduced-motion accessible** — all animations and hover transforms disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--fd-bg` | `#060a14` | Page background |
| `--fd-glass` | `rgba(255,255,255,0.06)` | Glass panel fill |
| `--fd-glass-edge` | `rgba(255,255,255,0.1)` | Glass border |
| `--fd-blur` | `24px` | Backdrop blur |
| `--fd-glow` | `rgba(0,0,0,0.45)` | Panel shadow |
| `--fd-fg` | `#e2e8f8` | Primary text |
| `--fd-fg-dim` | `rgba(226,232,248,0.5)` | Secondary text |
| `--fd-mint` | `#67e8f9` | Cyan accent |
| `--fd-amber` | `#fbbf24` | Gold accent |
| `--fd-rose` | `#fb7185` | Pink accent |
| `--fd-indigo` | `#818cf8` | Purple accent |

## How It Works

1. Four blurred circles are positioned absolutely behind the glass panel.
2. Each shape runs a unique drift keyframe with alternating direction and staggered timing.
3. The glass panel uses `backdrop-filter: blur()` to create the frosted-glass effect.
4. Content fades up into view using a simple opacity + translateY transition.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Customise the CSS custom properties to match your theme.
