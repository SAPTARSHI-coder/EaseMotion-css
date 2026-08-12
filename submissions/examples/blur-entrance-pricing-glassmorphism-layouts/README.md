# Blur-Entrance Pricing Table — Glassmorphism UI Layouts

A CSS-only pricing table where cards blur into focus on page load, with glassmorphism panels and a highlighted "Popular" tier.

## Features

- **Blur entrance animation** — cards start blurred and out of focus, then snap into clarity using `filter: blur()` and `scale()`
- **Glassmorphism cards** — semi-transparent panels with `backdrop-filter: blur(20px)` and subtle borders
- **Popular tier highlight** — middle card gets an accent border, glow shadow, and floating badge
- **Hover lift** — cards rise up on hover with enhanced shadow
- **Fully responsive** — collapses to single column on mobile
- **Reduced-motion accessible** — all animations and hover effects disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--bep-bg` | `#0b0f1e` | Page background |
| `--bep-card` | `rgba(255,255,255,0.05)` | Card fill |
| `--bep-card-border` | `rgba(255,255,255,0.09)` | Card border |
| `--bep-blur` | `20px` | Backdrop blur |
| `--bep-shadow` | `rgba(0,0,0,0.45)` | Card shadow |
| `--bep-white` | `#edf0ff` | Primary text |
| `--bep-muted` | `rgba(237,240,255,0.48)` | Secondary text |
| `--bep-lime` | `#a3e635` | Badge accent |
| `--bep-cyan` | `#22d3ee` | Popular tier accent |

## How It Works

1. Each card starts with `opacity: 0`, `filter: blur(14px)`, and `scale(0.96)`.
2. The `bepBlurIn` keyframe animates it to full opacity, zero blur, and natural scale.
3. Staggered `animation-delay` values create a cascading entrance effect.
4. The popular card uses `::before` positioning for the "Popular" badge.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies required. Customise the CSS custom properties to match your theme.
