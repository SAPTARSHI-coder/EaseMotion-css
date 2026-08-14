# Fintech Dashboard - Bounce-Pulse Hero Section

A pure CSS/HTML hero section for fintech dashboard landing pages, featuring a bouncy entrance animation on a portfolio value card, surrounded by expanding pulse rings that suggest live, active data.

## Features

- Portfolio card bounces in on load with a spring-like easing curve
- Two staggered pulse rings expand and fade behind the card, looping continuously
- Fully responsive — stacks vertically on smaller screens
- Respects `prefers-reduced-motion` by disabling all animations
- No external JS or frameworks — pure CSS/HTML

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Replace the heading, subtitle, CTA text, and card values with your own content.
3. Adjust `--accent` to match your brand color.

## CSS Custom Properties

| Property | Purpose |
|---|---|
| `--hero-bg` | Page background color |
| `--card-bg` | Portfolio card background color |
| `--accent` | Primary accent color (CTA, pulse rings, value text) |
| `--accent-soft` | Softened accent for badges and pulse rings |
| `--text-primary` | Primary text color |
| `--text-secondary` | Secondary/subtitle text color |
| `--radius` | Border radius for the card |
| `--bounce-speed` | Duration for the bounce and pulse animations |

## Accessibility

- All animation is disabled under `prefers-reduced-motion: reduce`.
- The CTA button has a visible `:focus-visible` state.
- Layout reflows cleanly on narrow viewports.