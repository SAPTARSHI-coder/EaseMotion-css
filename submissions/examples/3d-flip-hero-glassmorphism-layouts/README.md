# 3D-Flip Hero Section — Glassmorphism UI Layouts

A CSS-only hero section that performs a 3D card flip on hover, combining glassmorphism backdrop-blur with perspective-based transforms.

## Features

- **Pure CSS 3D flip** — uses `transform-style: preserve-3d`, `rotateY(180deg)`, and `backface-visibility: hidden` for a clean card flip effect
- **Glassmorphism styling** — semi-transparent background with `backdrop-filter: blur()` and subtle border for a frosted-glass look
- **Animated background orbs** — floating blurred circles add depth without JavaScript
- **Entrance animation** — the hero scene fades in and scales up on page load
- **Fully responsive** — scales gracefully from 400px mobile screens up to full desktop width
- **Reduced-motion accessible** — all animations and transitions respect the `prefers-reduced-motion` media query

## CSS Custom Properties

All theme values are defined as CSS custom properties on `:root` for easy customization:

| Variable | Default | Description |
|----------|---------|-------------|
| `--3fh-bg-deep` | `#0a0e1a` | Page background colour |
| `--3fh-glass-bg` | `rgba(255,255,255,0.08)` | Glass panel background tint |
| `--3fh-glass-border` | `rgba(255,255,255,0.15)` | Glass panel border colour |
| `--3fh-glass-shadow` | `rgba(0,0,0,0.35)` | Glass panel drop-shadow |
| `--3fh-text-primary` | `#f0f4ff` | Main text colour |
| `--3fh-text-secondary` | `rgba(240,244,255,0.6)` | Secondary text colour |
| `--3fh-accent` | `#6ee7b7` | Primary accent (green) |
| `--3fh-accent-alt` | `#818cf8` | Secondary accent (indigo) |
| `--3fh-flip-duration` | `0.7s` | Flip animation speed |
| `--3fh-card-w` | `min(520px, 88vw)` | Card width |
| `--3fh-card-h` | `340px` | Card height |

## How It Works

1. The hero scene sets `perspective: 900px` to establish a 3D rendering context.
2. The card uses `transform-style: preserve-3d` so its children exist in 3D space.
3. On hover, the card rotates 180 degrees along the Y axis (`rotateY(180deg)`).
4. Each face has `backface-visibility: hidden` so only the front-facing side is visible.
5. The back face is pre-rotated 180 degrees so it appears correctly after the flip.

## Usage

Copy the `demo.html` and `style.css` files into your project. The hero section works standalone — no JavaScript or external dependencies required.

To customise colours or timing, override the CSS custom properties in your own stylesheet.
