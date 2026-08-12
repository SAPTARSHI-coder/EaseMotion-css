# Slingshot Loader

A glassmorphism-inspired loading animation that mimics the pull-and-release motion of a slingshot. The loader features a Y-shaped frame with a rubber band, pouch, and projectile that cycles through tension, release, and spring-back phases.

## Features

- **Slingshot mechanic** — stretch → hold → snap release → spring back
- **Glassmorphism design** — frosted glass panel with backdrop blur and subtle borders
- **Three-dot sequence** — dots appear in staggered order after each release
- **Three size variants** — small, default, and large
- **Three color themes** — primary purple, neon green, and rose pink
- **Pure CSS animation** — no JavaScript required
- **Accessible** — uses `role="status"` and `aria-label`

## File Structure

```
slingshot-loader/
├── demo.html
├── style.css
└── README.md
```

## How It Works

The animation runs in a **1.6-second loop** across four stages:

1. **Pull** (0–240ms) — The pouch and projectile scale down and drift upward, simulating the band being stretched back
2. **Hold** (240–480ms) — Tension is maintained
3. **Release** (480–672ms) — The pouch snaps forward with elastic overshoot; the projectile blooms with a glow burst; the three dots fire in sequence
4. **Settle** (672–1600ms) — Everything springs back and resets

### Key CSS Properties

- `cubic-bezier(0.22, 0.61, 0.36, 1)` — custom ease for elastic snap feel
- `cubic-bezier(0.34, 1.56, 0.64, 1)` — projectile glow burst overshoot
- `backdrop-filter: blur(12px)` — frosted glass effect
- `box-shadow` layering — glow halos on projectile and dots

## Usage

Open `demo.html` in any modern browser. No build step or dependencies required.

## Customization

| Variable | Default | Purpose |
|---|---|---|
| `--primary` | `#6c63ff` | Main accent color |
| `--primary-glow` | `rgba(108,99,255,0.5)` | Glow/shadow color |
| `--band-color` | `#e74c3c` | Rubber band color |
| `--pouch-color` | `#8e44ad` | Pouch color |

Override these in your own stylesheet to match your brand palette.

## Accessibility

The loader uses `role="status"` and `aria-label="Loading"` so screen readers announce it as a live region. Pair with a visually hidden text label if the context matters.
