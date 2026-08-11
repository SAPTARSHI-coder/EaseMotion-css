# Glitch-Flicker Pricing Table — Glassmorphism UI Layouts

A CSS-only pricing table with a glitch-flicker hover effect, glassmorphism panels, and a highlighted "Pro" tier.

## Features

- **Glitch hover effect** — cards shift erratically on hover using stepped `translate()` keyframes to simulate a glitch
- **Flicker label** — the hot card shows a flickering "Pro" tag on hover using stepped opacity animation
- **Glassmorphism cards** — semi-transparent panels with `backdrop-filter: blur(20px)` and subtle borders
- **Hot tier highlight** — Pro card gets a red accent border and glow shadow by default
- **Fully responsive** — collapses to single column on mobile
- **Reduced-motion accessible** — all animations and hover effects disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--gfp-bg` | `#080c1a` | Page background |
| `--gfp-glass` | `rgba(255,255,255,0.05)` | Card fill |
| `--gfp-glass-edge` | `rgba(255,255,255,0.1)` | Card border |
| `--gfp-blur` | `20px` | Backdrop blur |
| `--gfp-shadow` | `rgba(0,0,0,0.45)` | Card shadow |
| `--gfp-white` | `#eef2ff` | Primary text |
| `--gfp-dim` | `rgba(238,242,255,0.45)` | Secondary text |
| `--gfp-red` | `#f43f5e` | Glitch accent |
| `--gfp-red-dim` | `rgba(244,63,94,0.15)` | Glitch glow |
| `--gfp-green` | `#34d399` | Badge accent |

## How It Works

1. On hover, `gfpGlitch` runs with `steps(2, end)` to create jerky translate jumps.
2. The hot card's `::before` pseudo-element flickers between opacity values using `gfpFlicker` with `steps(3, end)`.
3. A red border and glow shadow appear on the hovered card for visual feedback.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to match your theme.
