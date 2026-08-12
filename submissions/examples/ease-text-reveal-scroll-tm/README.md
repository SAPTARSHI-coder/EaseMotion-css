# Text Reveal on Scroll Component

**Issue:** [#71812](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/71812)

Text that reveals with slide-up animation on scroll using Intersection Observer API.

## Design Tokens

| Token | Default |
|-------|---------|
| `--tm-rev-bg` | `#0f172a` |
| `--tm-rev-accent` | `#6366f1` |
| `--tm-rev-heading` | `3.5rem` |
| `--tm-rev-fade-dist` | `60px` |
| `--tm-rev-delay-step` | `0.15s` |

## Usage

- `.rev-animate` — add `--i` CSS var (0, 1, 2...) for staggered delay
- Wire up Intersection Observer via JS (snippet in demo.html)
