# Bounce-Pulse Stepper — Glassmorphism UI Layouts

A CSS-only stepper where each step dot has a continuously pulsing ring animation, wrapped in glassmorphism panels.

## Features

- **Pulse ring animation** — an expanding ring pulses outward from each step dot on a looping animation with staggered delays
- **Glassmorphism panels** — step content uses semi-transparent fill with `backdrop-filter: blur(18px)` and subtle borders
- **Hover highlight** — step panels gain an accent border and enhanced shadow on hover
- **Staggered entrance** — steps fade in one after another with increasing `animation-delay`
- **Fully responsive** — adapts dot size, ring size, and padding on smaller screens
- **Reduced-motion accessible** — pulse animation and hover effects disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--bps-bg` | `#060a16` | Page background |
| `--bps-glass` | `rgba(255,255,255,0.05)` | Panel fill |
| `--bps-border` | `rgba(255,255,255,0.09)` | Panel border |
| `--bps-blur` | `18px` | Backdrop blur |
| `--bps-shadow` | `rgba(0,0,0,0.42)` | Panel shadow |
| `--bps-text` | `#eef2ff` | Primary text |
| `--bps-dim` | `rgba(238,242,255,0.46)` | Secondary text |
| `--bps-pink` | `#f472b6` | Accent colour |
| `--bps-pink-soft` | `rgba(244,114,182,0.15)` | Dot background |

## How It Works

1. Each step dot has a `::before`-like pulse ring using an absolutely positioned element.
2. The ring scales from `1` to `2.2` while fading from `0.6` to `0` opacity on the `bpsPulseRing` keyframe.
3. Staggered `animation-delay` values create a wave effect across the dots.
4. Step content panels sit beside the dots with a glassmorphism backdrop.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to match your theme.
