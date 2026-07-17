# Typing And Text Reveal Animations

Typewriter, text reveal, and character-by-character animation effects for headings and paragraphs

## Features

- typewriter: classic cursor-blink typing effect
- typewriter-smooth: no-cursor smooth reveal
- text-reveal: slide-up character reveal
- text-reveal-fade: fade-in character reveal
- text-reveal-wave: wave-pattern reveal
- sm/md/lg sizing variants
- Dark mode with light text
- prefers-reduced-motion: instant display

## Usage

### Quick Start

```html
<!-- Add the CSS file to your project -->
<link rel="stylesheet" href="submissions/examples/typing-text-animations-tm/style.css">
```

### Size Variants

| Class | Size | Use Case |
|-------|------|----------|
| `*-sm` | Small | Compact UI, badges, tags |
| `*-md` | Medium | Body text, buttons, cards |
| `*-lg` | Large | Headings, hero text, prominent elements |

## Design Tokens Used

This component uses the following EaseMotion-css design tokens:

- `var(--ease-color-primary)` — Primary brand color
- `var(--ease-color-secondary)` — Secondary accent color
- `var(--ease-color-neutral-50)` through `var(--ease-color-neutral-900)` — Neutral palette
- `var(--ease-color-success)`, `var(--ease-color-danger)`, `var(--ease-color-warning)` — Semantic colors
- `var(--ease-radius-sm)`, `var(--ease-radius-md)`, `var(--ease-radius-lg)`, `var(--ease-radius-xl)` — Border radii
- `var(--ease-shadow-sm)` through `var(--ease-shadow-xl)` — Elevation levels
- `var(--ease-speed-fast)`, `var(--ease-speed-medium)`, `var(--ease-speed-slow)` — Animation durations
- `var(--ease-ease)`, `var(--ease-ease-bounce)` — Easing functions
- `var(--ease-glow-primary)`, `var(--ease-glow-secondary)` — Glow effects
- `var(--ease-space-1)` through `var(--ease-space-16)` — Spacing scale
- `var(--ease-font-sans)`, `var(--ease-font-mono)` — Typography
- `var(--ease-text-xs)` through `var(--ease-text-4xl)` — Type scale
- `var(--ease-glass-bg)`, `var(--ease-glass-border)` — Glass morphism tokens

## Accessibility

- All animations respect `prefers-reduced-motion` — users who prefer reduced motion see static fallback styles
- Dark mode variants via `prefers-color-scheme: dark` query
- Color choices maintain WCAG AA contrast ratios

## License

MIT — submitted to EaseMotion-css competition.
