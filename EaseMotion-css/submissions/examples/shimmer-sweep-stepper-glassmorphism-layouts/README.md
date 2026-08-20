# Shimmer-Sweep Stepper — Glassmorphism UI Layouts

A CSS-only stepper component where each step dot has a continuously sweeping shimmer highlight, wrapped in glassmorphism panels.

## Features

- **Shimmer sweep** — a light highlight sweeps across each step dot on a looping animation with staggered delays
- **Glassmorphism panels** — step bodies use semi-transparent fill with `backdrop-filter: blur(18px)` and subtle borders
- **Vertical connector line** — a thin line links all steps using a pseudo-element on the track
- **Hover highlight** — step bodies gain an accent border and enhanced shadow on hover
- **Staggered entrance** — steps fade in one after another with increasing `animation-delay`
- **Fully responsive** — adapts dot size, padding, and spacing on smaller screens
- **Reduced-motion accessible** — shimmer animation and hover effects disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--sss-bg` | `#070a18` | Page background |
| `--sss-glass` | `rgba(255,255,255,0.05)` | Panel fill |
| `--sss-border` | `rgba(255,255,255,0.09)` | Panel border |
| `--sss-blur` | `18px` | Backdrop blur |
| `--sss-shadow` | `rgba(0,0,0,0.42)` | Panel shadow |
| `--sss-text` | `#eef2ff` | Primary text |
| `--sss-dim` | `rgba(238,242,255,0.46)` | Secondary text |
| `--sss-teal` | `#2dd4bf` | Accent colour |
| `--sss-shimmer` | `rgba(255,255,255,0.12)` | Shimmer highlight |

## How It Works

1. Each step dot has a `::before`-like shimmer layer using a gradient `linear-gradient(105deg, transparent 40%, highlight 50%, transparent 60%)`.
2. The shimmer translates from `-100%` to `100%` on a looping `sssShimmer` keyframe.
3. Staggered `animation-delay` values create a wave effect across the dots.
4. Step bodies sit beside the dots with a vertical connector line drawn via `::before` on the `<ol>`.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to match your theme.
