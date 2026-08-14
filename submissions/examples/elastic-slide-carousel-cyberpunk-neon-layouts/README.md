# Elastic-Slide Carousel — Cyberpunk Neon Layouts

A pure CSS horizontal scroll carousel with neon-bordered cards that slide in using elastic easing. Features cyberpunk dark grid background, glowing orb decorations, and color-coded cards.

## Features

- **Elastic slide-in animation** — cards enter with `cubic-bezier(0.34, 1.56, 0.64, 1)` for a bouncy overshoot
- **Scroll-snap navigation** — native CSS `scroll-snap-type: x mandatory` for smooth card snapping
- **Neon glow top bar** — each card reveals a colored glow line on hover
- **Animated background orbs** — three floating blurred circles (cyan, pink, violet)
- **Grid overlay** — subtle cyan grid lines on dark background
- **Fully responsive** — cards shrink on mobile, scroll snap changes to proximity mode
- **Reduced-motion accessible** — all animations and hover transforms disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--esc-bg` | `#060a12` | Page background |
| `--esc-surface` | `rgba(255,255,255,0.03)` | Card fill |
| `--esc-border` | `rgba(255,255,255,0.07)` | Card border |
| `--esc-text` | `#dfe6f0` | Primary text |
| `--esc-text-dim` | `rgba(223,230,240,0.45)` | Secondary text |
| `--esc-neon-cyan` | `#00e5ff` | Cyan neon accent |
| `--esc-neon-pink` | `#ff1f71` | Pink neon accent |
| `--esc-neon-violet` | `#9d4edd` | Violet neon accent |
| `--esc-glow-cyan` | `rgba(0,229,255,0.3)` | Cyan glow shadow |
| `--esc-glow-pink` | `rgba(255,31,113,0.3)` | Pink glow shadow |
| `--esc-glow-violet` | `rgba(157,78,221,0.3)` | Violet glow shadow |
| `--esc-elastic` | `cubic-bezier(0.34,1.56,0.64,1)` | Elastic easing curve |

## How It Works

1. The carousel uses native CSS `scroll-snap-type: x mandatory` for smooth card-by-card navigation.
2. Each card slides in via `escCardSlide` keyframes — starting offset with horizontal scale.
3. Cards are staggered with increasing `animation-delay` for a cascading entrance.
4. Hovering a card lifts it with `translateY(-4px)` and reveals a neon glow bar at the top.
5. Background orbs pulse with `escOrbFloat` keyframes on a subtle grid overlay.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to adjust neon colors, glow intensity, or elastic bounce.
