# CSS Morph-Glow Pricing Table (#56331)

A modern, pure CSS pricing table with morphing glow effects for creative portfolio layouts. Features smooth conic-gradient animations, responsive design, and accessibility support.

## Features

- Pure CSS/HTML — no JavaScript
- Morphing glow effect using animated `conic-gradient` + `blur`
- Smooth hover transitions with `translateY` and glow intensification
- Featured plan with scale-up and persistent glow
- Responsive 3-column grid (stacks on mobile)
- `prefers-reduced-motion` support
- Semantic HTML with ARIA-friendly markup
- CSS custom properties for easy theming

## Files

```text
submissions/examples/56331-morph-glow-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## CSS Custom Properties

| Variable | Description |
| --- | --- |
| `--bg` | Page background |
| `--surface` | Card background |
| `--primary` | Primary accent color |
| `--primary-glow` | Glow shadow color |
| `--text` | Primary text |
| `--text-muted` | Secondary text |
| `--border` | Card border color |
| `--speed` | Transition duration |
| `--ease` | Timing function |

## How the Glow Works

The morph-glow effect uses a `.card-glow` pseudo-element with:
1. `conic-gradient` — rotating color wheel
2. `filter: blur()` — softens into a glow
3. `@keyframes morph-glow` — animates hue-rotate and blur intensity
4. `animation-play-state` — paused by default, runs on hover

```css
.card-glow {
    background: conic-gradient(from 0deg, transparent, var(--primary), transparent, #c084fc, transparent);
    filter: blur(12px);
    animation: morph-glow 4s linear infinite paused;
}
.pricing-card:hover .card-glow {
    opacity: 0.6;
    animation-play-state: running;
}
```

## Usage

1. Open `demo.html` in a modern browser.
2. Hover over cards to see the morph-glow effect.
3. Resize to see responsive behavior.

## Browser Support

All modern browsers supporting CSS custom properties, `conic-gradient`, `filter`, and CSS animations.
