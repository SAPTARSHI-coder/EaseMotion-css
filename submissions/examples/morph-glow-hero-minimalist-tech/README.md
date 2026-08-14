# Morph-Glow Hero Section — Minimalist Tech Layouts

A pure CSS hero section with a morphing glow blob background. A clean white card holds the content while an amber blob slowly shifts shape and drifts behind it.

## Features

- **Morphing glow blob** — a blurred shape that continuously changes `border-radius` and position via keyframes
- **Minimalist card layout** — white card on light gray background with rounded corners
- **Stats row** — three metric blocks separated by a top border
- **Two CTA buttons** — solid amber primary and outlined secondary with hover lift
- **Fully responsive** — buttons stack vertically on mobile, glow shrinks and fades
- **Reduced-motion accessible** — morphing blob animation disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--mgh-bg` | `#f3f3f6` | Page background |
| `--mgh-surface` | `#ffffff` | Hero card fill |
| `--mgh-border` | `#dddde2` | Border color |
| `--mgh-text` | `#1b1b28` | Primary text |
| `--mgh-dim` | `#7c7c8e` | Secondary text |
| `--mgh-amber` | `#d97706` | Primary accent (amber) |
| `--mgh-amber-soft` | `rgba(217,119,6,0.08)` | Accent background tint |
| `--mgh-radius` | `18px` | Hero card border radius |

## How It Works

1. The glow blob uses `mghMorph` keyframes — animating `border-radius`, `translate`, and `scale`.
2. The blob is blurred with `filter: blur(60px)` and positioned behind the card.
3. Content sits in a flex column with consistent gap spacing.
4. Stats row uses a top border separator and three flex columns.
5. Buttons use `translateY(-1px)` on hover for a micro-lift.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Override the CSS custom properties to adjust accent color, blob blur, or card radius.
