# Scale-Hover Tooltip — Minimalist Tech Layouts

A pure CSS tooltip component where triggers scale up on hover and tooltips fade in with a matching scale transform. Supports four positions (top, bottom, left, right) using `data-pos` attributes.

## Features

- **Scale hover** — trigger elements scale to 1.08x with elastic easing on hover
- **Scale-in tooltip** — tooltips appear with `scale(0.85)` → `scale(1)` transition
- **Four positions** — top, bottom, left, right via `data-pos` attribute
- **Three trigger variants** — default (white), accent (coral fill), outline (coral border)
- **Minimalist tech aesthetic** — light grid background, monospace font, dark tooltip
- **Fully responsive** — left/right tooltips collapse to bottom on narrow screens
- **Reduced-motion accessible** — all scale transforms and transitions disabled when `prefers-reduced-motion: reduce`

## CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--sht-bg` | `#f0f0f4` | Page background |
| `--sht-surface` | `#ffffff` | Trigger fill |
| `--sht-border` | `#d6d6dc` | Border color |
| `--sht-text` | `#1c1c28` | Primary text |
| `--sht-dim` | `#7a7a8c` | Secondary text |
| `--sht-coral` | `#ef4444` | Primary accent (coral) |
| `--sht-coral-soft` | `rgba(239,68,68,0.06)` | Accent background tint |
| `--sht-tip-bg` | `#1c1c28` | Tooltip background |
| `--sht-tip-text` | `#f0f0f4` | Tooltip text |
| `--sht-radius` | `8px` | Trigger border radius |

## How It Works

1. Triggers use `::before` pseudo-element with `content: attr(data-tip)` for tooltip text.
2. Tooltips start at `opacity: 0` and `scale(0.85)`, transitioning to visible on hover.
3. Each position uses `transform-origin` to scale from the correct direction.
4. Triggers use `cubic-bezier(0.34, 1.56, 0.64, 1)` for elastic scale effect.

## Usage

Copy `demo.html` and `style.css` into your project. No JavaScript or external dependencies needed. Add `data-tip="text"` and `data-pos="top|bottom|left|right"` to any element.
