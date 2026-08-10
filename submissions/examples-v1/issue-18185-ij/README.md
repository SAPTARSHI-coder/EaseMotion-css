# ease-scale-bounce

An element scales from zero to full size with a natural bounce feel.

The animation uses a `cubic-bezier` easing to produce an overshoot (scale 1.15 → 0.95 → 1) that mimics a physical bounce.

## Usage

1. Link `style.css` in your HTML.
2. Add class `.container` (or apply `animation: scaleBounce …` to any element).
3. For `prefers-reduced-motion`, the animation is automatically disabled.

## Files

| File       | Purpose                  |
|------------|--------------------------|
| demo.html  | Minimal demo page        |
| style.css  | Animation keyframes      |
| README.md  | This file                |
