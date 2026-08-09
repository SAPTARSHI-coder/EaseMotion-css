# 3D-Flip Pricing Table — Minimalist Tech Layouts

A pure CSS pricing table with 3D flip animation on hover. Three tiered cards (Dev, Studio, Corp) flip to reveal feature lists with a perspective-based rotation on a clean light background.

## Features

- **3D flip animation** — cards rotate on Y-axis to reveal back face with features on hover
- **Entrance animation** — cards flip in from 90deg with staggered delays
- **Two-face design** — front shows pricing, back shows feature list and CTA
- **Minimalist tech aesthetic** — light background, monospace font, cross decorations
- **Featured card highlight** — Studio card has blue border, shadow, and ribbon badge
- **Fully responsive** — stacks to single column on mobile
- **Reduced-motion accessible** — all animations and flip transitions disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--3dp-bg` | `#f4f4f6` | Page background |
| `--3dp-surface` | `#ffffff` | Card fill |
| `--3dp-border` | `#dedee2` | Border color |
| `--3dp-text` | `#1c1c28` | Primary text |
| `--3dp-text-dim` | `#77778a` | Secondary text |
| `--3dp-accent` | `#2d6cdf` | Primary accent (blue) |
| `--3dp-accent-dim` | `rgba(45,108,223,0.07)` | Accent background tint |
| `--3dp-green` | `#2ecc71` | Feature check color |
| `--3dp-radius` | `10px` | Card border radius |
| `--3dp-depth` | `800px` | 3D perspective depth |

## How It Works

1. Each card uses `perspective: 800px` and `transform-style: preserve-3d` for 3D context.
2. Front and back faces use `backface-visibility: hidden` and the back is pre-rotated `rotateY(180deg)`.
3. On hover, `.tp-card__inner` rotates to `rotateY(180deg)`, revealing the back face.
4. Entrance uses `tpCardEntrance` keyframes — starting at 90deg rotation and settling to 0.
5. Background crosses rotate continuously with `tpCrossSpin` keyframes.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to adjust depth, accent colors, or animation timing.
