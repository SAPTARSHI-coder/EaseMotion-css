# Scale-Hover Stepper — Glassmorphism UI Layouts

A CSS-only stepper where each step scales up on hover with a smooth cubic-bezier transition, wrapped in glassmorphism panels.

## Features

- **Scale hover effect** — both the step dot and card scale up on hover using `scale()` with a smooth ease-out curve
- **Glassmorphism panels** — step cards use semi-transparent fill with `backdrop-filter: blur(18px)` and subtle borders
- **Dot accent colour** — step dots use a tinted background that intensifies on hover
- **Staggered entrance** — steps pop in one after another with increasing `animation-delay`
- **Fully responsive** — adapts dot size and padding on smaller screens
- **Reduced-motion accessible** — all animations, transitions, and hover transforms disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--shs-bg` | `#070a17` | Page background |
| `--shs-glass` | `rgba(255,255,255,0.05)` | Card fill |
| `--shs-border` | `rgba(255,255,255,0.09)` | Card border |
| `--shs-blur` | `18px` | Backdrop blur |
| `--shs-shadow` | `rgba(0,0,0,0.42)` | Card shadow |
| `--shs-text` | `#edf1ff` | Primary text |
| `--shs-dim` | `rgba(237,241,255,0.46)` | Secondary text |
| `--shs-violet` | `#a78bfa` | Accent colour |
| `--shs-violet-soft` | `rgba(167,139,250,0.12)` | Dot background |

## How It Works

1. Each step dot and card has `transform: scale(1)` by default.
2. On hover, the dot scales to `1.2` and the card scales to `1.03`.
3. Transitions use `cubic-bezier(0.22, 1, 0.36, 1)` for a natural ease-out feel.
4. The card also gains an accent border and enhanced shadow on hover.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to match your theme.
